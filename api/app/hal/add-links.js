module.exports = function addLinks(responseBody, links, embedded = undefined) {
  return (embedded)
    ? {
        ...responseBody,
        _links: {
          ...responseBody._links,
          ...links
        },
        _embedded: {
          ...responseBody._embedded,
          ...embedded
        }
      }
    : {
        ...responseBody,
        _links: {
          ...responseBody._links,
          ...links
        }
      };
}
