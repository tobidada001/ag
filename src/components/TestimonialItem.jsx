import userimg from '/assets/icons/user.png';

export default () => {
  return (
    <>
      <div className="mb-8 sm:break-inside-avoid">
        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-4">
            <img
              alt=""
              src={userimg}
              className="size-14 rounded-full object-cover"
            />

            <div>
              <div className="flex justify-center gap-0.5 text-green-500">
                <img src="/assets/icons/greenstar.svg" height={25} width={25} />
                <img src="/assets/icons/greenstar.svg" height={25} width={25} />
                <img src="/assets/icons/greenstar.svg" height={25} width={25} />
                <img src="/assets/icons/greenstar.svg" height={25} width={25} />
               
              </div>

              <p className="mt-0.5 text-lg font-medium text-gray-900">
                Ugochukwu Martins
              </p>
            </div>
          </div>

          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit
            rerum incidunt, a consequuntur recusandae ab saepe illo est quia
            obcaecati neque quibusdam eius accusamus error officiis atque
            voluptates magnam!
          </p>
        </blockquote>
      </div>
    </>
  );
};
