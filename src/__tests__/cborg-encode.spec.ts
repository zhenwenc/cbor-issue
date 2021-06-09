import * as cborg from 'cborg';

/**
 * -----------------------------------------------------------------------------
 *
 * This test case was aimed to reproduce the issue that `cborg` doesn't encode
 * `string` values as expected while running on Jest due to the following check
 * returns `false` for string tokens:
 *
 *   token.type === Type.string
 *
 * Link: https://github.com/rvagg/cborg/blob/v1.3.3/lib/2bytes.js#L92
 *
 * -----------------------------------------------------------------------------
 */
it('should encode JSON document to CBOR format', async () => {
  const document = {
    '@context': ['https://www.w3.org/2018/credentials/v1'],
    type: ['VerifiableCredential'],
    id: 'a87992e9-0ccc-4811-82d2-d0f2bccb64d9',
  };

  const bytes = cborg.encode(document);
  const value = Buffer.from(bytes).toString('base64');
  expect(value).toEqual(
    'o2JpZHgkYTg3OTkyZTktMGNjYy00ODExLTgyZDItZDBmMmJjY2I2NGQ5ZHR5cGWBdFZlcmlmaWFibGVDcmVkZW50aWFsaEBjb250ZXh0gXgmaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjE='
  );
});
