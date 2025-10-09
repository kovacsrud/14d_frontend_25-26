function Character({character}) {
  return (
    <div className=" dark:bg-gray-700 m-5 w-96 ">
      <div className="max-w-sm mx-auto bg-sky-200 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div className="px-4 py-6">
          <div className="text-center my-4">
            <img
              className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
              src={character.image}
              alt=""
            />
            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800 dark:text-white">
                {character.name}
              </h3>
              <h6 className="text-gray-500 dark:text-white mb-1">{character.status}</h6>
              <h6 className="text-gray-500 dark:text-white mb-1">{character.species}</h6>
              <h6 className="text-gray-500 dark:text-white mb-1">{character.gender}</h6>
              <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                <svg
                  className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className=""
                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  />
                </svg>
                {character.location.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
