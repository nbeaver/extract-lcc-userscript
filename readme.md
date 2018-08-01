WorldCat does not list Library of Congress Classification (LCC)
on the title pages of its catalog.
However, sometimes the LCC is stored in the `rft.identifier` attribute
of a query string stored in the title of a certain `<span>` element
in the "Get This Item" section.

For example, the call number "QA76.73.J39 C763 2008"
is stored in this page for "[JavaScript: the good parts](https://www.worldcat.org/title/javascript-the-good-parts/oclc/661013692)"
by Douglas Crockford.

    <span class="Z3988"  title="url_ver=Z39.88-2004&rfr_id=info%3Asid%2Fworldcat.org%3Aworldcat&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&rft.genre=book&req_dat=%3Csessionid%3E&rfe_dat=%3Caccessionnumber%3E661013692%3C%2Faccessionnumber%3E&rft_id=info%3Aoclcnum%2F661013692&rft_id=urn%3AISBN%3A9787564114473&rft.aulast=Crockford&rft.aufirst=Douglas&rft.btitle=JavaScript+%3A+the+good+parts&rft.date=2009&rft.isbn=9787564114473&rft.place=Nanjing&rft.pub=Southeast+University+Press&rft.genre=book&rft.identifier=QA76.73.J39+C763+2008&rft_dat=%7B%22stdrt1%22%3A%22Book%22%2C%22stdrt2%22%3A%22PrintBook%22%7D"></span>

This userscript extracts the LCC from the page
and displays it in the "Details" section.

![Library of Congress Classification : QA76.73.J39 C763 2008](example-screenshot.png)

Hosted here on GreasyFork:

https://greasyfork.org/en/scripts/370817-show-lcc-on-worldcat
