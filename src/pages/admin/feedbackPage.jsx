export default function AdminFeedback() {
  const feedbacks = [
    {
      feedbackId: "FB1001",
      userId: "U001",
      userName: "John Doe",
      feedbackText: "Great service! I had a wonderful experience.",
      approved: true,
    },
    {
      feedbackId: "FB1002",
      userId: "U002",
      userName: "Jane Smith",
      feedbackText: "The room was clean, but the service could be improved.",
      approved: false,
    },
    {
      feedbackId: "FB1003",
      userId: "U003",
      userName: "Emily Johnson",
      feedbackText: "I enjoyed my stay, and the staff was very helpful!",
      approved: true,
    },
    {
      feedbackId: "FB1004",
      userId: "U004",
      userName: "Michael Brown",
      feedbackText:
        "The check-in process was too slow, and I had to wait for an hour.",
      approved: false,
    },
    {
      feedbackId: "FB1005",
      userId: "U005",
      userName: "Alice Williams",
      feedbackText: "Amazing hotel with great amenities! Highly recommend.",
      approved: true,
    },
  ];

  return (
    <>
      <div className="w-full">
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Feedback Id</th>
              <th className="border border-gray-300 px-4 py-2">User Id</th>
              <th className="border border-gray-300 px-4 py-2">User Name</th>
              <th className="border border-gray-300 px-4 py-2">Feedback</th>
              <th className="border border-gray-300 px-4 py-2">Approved</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feed, index) => {
              return (
                <tr key={index}>
                  <td>{feed.feedbackId}</td>
                  <td>{feed.userId}</td>
                  <td>{feed.userName}</td>
                  <td>{feed.feedbackText}</td>
                  <td>{feed.approved}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
