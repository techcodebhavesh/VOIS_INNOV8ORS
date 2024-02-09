import Card from "./components/card";

const Widget = ({ icon, obj }) => {
  return (
    <>
      <Card extra="!flex-row flex-grow items-center rounded-[20px] widget-cards">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <span className="font-bold">TITLE</span>
          <p className="font-dm text-sm font-bold">
            {obj?.title?.rating}
          </p>
          <h4 className="text-xl text-navy-700 dark:text-white">
            {obj?.title?.suggestion}
          </h4>
        </div>
      </Card>
      <Card extra="!flex-row flex-grow items-center rounded-[20px] widget-cards">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <span className="font-bold">DESCRIPTION</span>
          <p className="font-dm text-sm font-bold">
            {obj?.description?.rating}
          </p>
          <h4 className="text-xl text-navy-700 dark:text-white">
            {obj?.description?.suggestion}
          </h4>
        </div>
      </Card>
      <Card extra="!flex-row flex-grow items-center rounded-[20px] widget-cards">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <span className="font-bold">IMAGE</span>
          <p className="font-dm text-sm font-bold">
            {obj?.image?.rating}
          </p>
          <h4 className="text-xl text-navy-700 dark:text-white">
            {obj?.image?.suggestion}
          </h4>
        </div>
      </Card>
      <Card extra="!flex-row flex-grow items-center rounded-[20px] widget-cards">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <span className="font-bold">FEATURES AND BENIFITS</span>
          <p className="font-dm text-sm font-bold">
            {obj?.featuresAndBenefits?.rating}
          </p>
          <h4 className="text-xl text-navy-700 dark:text-white">
            {obj?.featuresAndBenefits?.suggestion}
          </h4>
        </div>
      </Card>
      <Card extra="!flex-row flex-grow items-center rounded-[20px] widget-cards">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <span className="font-bold">ADDITIONAL INFORMATION</span>
          <p className="font-dm text-sm font-bold">
            {obj?.additionalInformation?.rating}
          </p>
          <h4 className="text-xl text-navy-700 dark:text-white">
            {obj?.additionalInformation?.suggestion}
          </h4>
        </div>
      </Card>
      <Card extra="!flex-row flex-grow items-center rounded-[20px] widget-cards">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <span className="font-bold">OVERALL RATING</span>
          <p className="font-dm text-sm font-bold">
            {obj?.overallScore?.rating}
          </p>
          <h4 className="text-xl text-navy-700 dark:text-white">
            {obj?.overallScore?.suggestion}
          </h4>
        </div>
      </Card>
    </>
  );
};

export default Widget;
