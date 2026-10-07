import { app } from '@azure/functions';
import type { HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';

export async function identifyVehicle(
  _request: HttpRequest,
  _context: InvocationContext,
): Promise<HttpResponseInit> {
  return { status: 501 };
}

app.http('identify-vehicle', {
  methods: ['POST'],
  authLevel: 'function',
  handler: identifyVehicle,
});
