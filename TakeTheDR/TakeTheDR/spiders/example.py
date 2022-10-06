import scrapy


class DRSpider(scrapy.Spider):
    name = 'DR'
    allowed_domains = ['dr.dk']
    start_urls = ['https://www.dr.dk/nyheder/politik/folketingsvalg/din-stemmeseddel']

    def parse(self, response):
        kredse_urls = response.css("a[aria-label*='gå til stemmeseddel']")
        for urls in kredse_urls:
            yield response.follow(urls, callback=self.parse_kreds)

    def parse_kreds(self, response):
        kandidat_urls = response.css("a[aria-label*='gå til kandidatprofil']")
        for urls in kandidat_urls:
            yield scrapy.Request(response.urljoin(urls.attrib['href']), callback=self.parse_kandidat, meta={"playwright": True, "playwright_include_page": True})

    async def parse_kandidat(self, response):
        page = response.meta["playwright_page"]
        data = await page.evaluate('() => __NEXT_DATA__.props.pageProps.candidateAnswers')

        yield {'data': data}
        await page.close()
