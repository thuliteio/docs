import docsearch from '@docsearch/js';

docsearch({
    container: '#docsearch',
    appId: '70H5139H21',
    indexName: 'thulite',
    apiKey: '5c2d653189f5d57721370f43d0deba25',
    // askAi: 'YOUR_ALGOLIA_ASSISTANT_ID',
    insights: true
});

const onClick = function () {
    document.getElementsByClassName('DocSearch-Button')[0].click();
};

document.getElementById('searchToggleMobile').onclick = onClick;
document.getElementById('searchToggleDesktop').onclick = onClick;
