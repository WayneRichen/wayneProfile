const Experience = ({ state }) => {
  return (
    <div className="max-w-screen-lg w-full mx-auto">
      <hr />
      <div className="relative content w-full from-gray-900 to-gray-800 bg-gradient-to-b h-auto p-4 bg-no-repeat bg-center">
        <span className="text-2xl sm:text-3xl text-tan font-bold">
          {state.experience.title}
        </span>
        {state.experience.history.map((job) => (
          <div className="my-2 w-full">
            <span className="text-xl sm:text-2xl font-bold">{job.company}</span>
            <br />
            <span className="text-base sm:text-xl leading-none sm:leading-loose">
              {job.jobtitle}
            </span>
            <div className="w-full">
              <ul class="list-disc list-inside">
                {job.jobs.map((job) => (
                  <li>{job}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
