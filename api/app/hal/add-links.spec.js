const addLinks = require('./add-links');

describe('Add Links', () => {
  it('should preserve existing links', () => {
    const responseBody = {
      name: 'foo',
      description: 'bar',
      _links: {
        self: {
          href: '/v1'
        }
      }
    };

    const sut = addLinks(responseBody, {
      something: { href: '/v1/something' },
      somethingelse: { href: '/v1/somethingelse' }
    });

    expect(sut).toEqual({
      name: 'foo',
      description: 'bar',
      _links: {
        self: {
          href: '/v1'
        },
        something: {
          href: '/v1/something'
        },
        somethingelse: {
          href: '/v1/somethingelse'
        }
      }
    });
  });
});
