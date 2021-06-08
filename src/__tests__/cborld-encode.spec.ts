import * as cborld from '@digitalbazaar/cborld';

import { documentLoader } from '../__fixtures__/documentLoader';

/**
 * -----------------------------------------------------------------------------
 *
 * This test case aimed to reproduce the issue of the `encode` function doesn't
 * work as expected in Jest environment.
 *
 * My suspection is that the subclass instances of `CborldEncoder` aren't been
 * encoded by the defined `encode` function due to the `instanceof` check returns
 * incorrect result. For example:
 *
 *   const encoder = ContextEncoder.createEncoder({ value, transformer: this });
 *   expect(encoder instanceof CborldEncoder).toBe(true); // but returns false
 *
 * Therefore, the `encoder` token above will be unexpectedly processed by the
 * `cborg` default encoders.
 *
 * -----------------------------------------------------------------------------
 */
it('should encode JSON-LD document to CBOR-LD format with compression', async () => {
  const jsonldDocument = {
    '@context': ['https://www.w3.org/2018/credentials/v1'],
    type: ['VerifiableCredential'],
    id: 'a87992e9-0ccc-4811-82d2-d0f2bccb64d9',
  };

  const bytes = await cborld.encode({
    jsonldDocument,
    documentLoader,
    compressionMode: 1,
    diagnose: console.info,
  });

  const convertedData = Buffer.from(bytes).toString('base64');
  expect(convertedData).toEqual('2QUBowGBERhweCRhODc5OTJlOS0wY2NjLTQ4MTEtODJkMi1kMGYyYmNjYjY0ZDkYdYEYbA==');
});
