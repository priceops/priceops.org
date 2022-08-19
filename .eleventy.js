const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const pluginNavigation = require('@11ty/eleventy-navigation')
const { dirname, resolve, join, relative } = require('path')
const cheerio = require('cheerio')
const contentDir = resolve(__dirname, './content')

module.exports = eleventyConfig => {
  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.addPlugin(pluginSyntaxHighlight)
  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPassthroughCopy({ "content/static": "static" })

  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'yyyy-LL-dd'
    )
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'yyyy-LL-dd'
    )
  })

  // turn github markdown friendly links like ./blah.md or /content/blah.md
  // into their appropriate urls, like /blah
  eleventyConfig.addTransform('localLinks', function (content) {
    const { inputPath } = this
    const $ = cheerio.load(content)
    for (const link of $('a[href]')) {
      const { href } = link.attribs
      if (/^https?:/.test(href) || !/\.md(#.*)?$/.test(href)) {
        continue
      }
      const file = href.startsWith('/')
        ? join(__dirname, href)
        : resolve(dirname(inputPath), href)
      const rel = relative(contentDir, file)
      const url = join('/', rel).replace(/\.md(#.*)?$/, '$1')
      link.attribs.href = url
    }
    return '<!doctype html><html>' + $('html').html() + '</html>'
  })

  return {
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      data: '../_data',
      input: 'content',
      includes: '../_includes',
      layouts: '../_includes/layouts',
    },
  }
}
