// @@@SNIPSTART typescript-hello-workflow
import { proxyActivities, upsertSearchAttributes } from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';

const { greet } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(name: string): Promise<string> {
  try {
    upsertSearchAttributes({ customIntField: [42] });
  } catch (e) {
    console.log(e)
  }
  return await greet(name);
}
// @@@SNIPEND
