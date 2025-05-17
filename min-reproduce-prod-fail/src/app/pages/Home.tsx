
import { RequestInfo } from "rwsdk/worker";
import { BaseLayout } from "../layouts/BaseLayout";

export async function Home({ ctx }: RequestInfo) {
  // Fetch submissions data
  // const submissions = await getFormSubmissions();

  return (
    <BaseLayout ctx={ctx} title="Dashboard">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Recent Form Submissions
          </h2>
          Nothing to show here
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-600">Total Submissions</p>
              <p className="text-2xl font-bold"></p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-600">Latest Submission</p>
              <p className="text-lg font-medium truncate"></p>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
