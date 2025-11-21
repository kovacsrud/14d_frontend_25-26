import { useContext } from "react";
import TelepulesContext from "../context/TelepulesContext";
import Terkep from "./Terkep";


function TelepulesAdatok() {
  const { telepules, selectedTelepules } = useContext(TelepulesContext);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-5 text-3xl text-center font-bold text-amber-700">
        {telepules.telepulesnev}
      </h1>

      <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {telepules.telepulesnev}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {telepules.telepulesnev} fontosabb adatai:
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Település neve:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {telepules.telepulesnev}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Megye:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {telepules.megyenev}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Jogállás:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {telepules.jogallas}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Terület:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {telepules.terulet}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Lakások:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {telepules.lakasok}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Koordináták:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                lat:{telepules.lat}, lng:{telepules.lng}
              </dd>
            </div>
          </dl>
        </div>
      </div>
         <Terkep szeles={"400px"} magas={"400px"} zoom={13} />
    </div>
  );
}

export default TelepulesAdatok;
