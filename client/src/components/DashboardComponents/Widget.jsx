import Card from "./components/card";

const Widget = ({ icon, title, subtitle, obj }) => {
  console.log({ obj });
  return (
    <>
      <Card extra="!flex-row flex-grow items-center rounded-[20px]">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          TITLE
          <p className="font-dm text-sm font-medium text-gray-600">
            {obj?.title?.rating}
          </p>
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            {subtitle}
          </h4>
        </div>
      </Card>
      <Card extra="!flex-row flex-grow items-center rounded-[20px]">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          DESCRIPTION
          <p className="font-dm text-sm font-medium text-gray-600">
            {obj?.description?.rating}
          </p>
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            {subtitle}
          </h4>
        </div>
      </Card>
      <Card extra="!flex-row flex-grow items-center rounded-[20px]">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          IMAGE
          <p className="font-dm text-sm font-medium text-gray-600">
            {obj?.image?.rating}
          </p>
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            {subtitle}
          </h4>
        </div>
      </Card>
      <Card extra="!flex-row flex-grow items-center rounded-[20px]">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          FEATURES AND BENIFITS
          <p className="font-dm text-sm font-medium text-gray-600">
            {obj?.featuresAndBenefits?.rating}
          </p>
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            {subtitle}
          </h4>
        </div>
      </Card>
      <Card extra="!flex-row flex-grow items-center rounded-[20px]">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          ADDITIONAL INFORMATION
          <p className="font-dm text-sm font-medium text-gray-600">
            {obj?.additionalInformation?.rating}
          </p>
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            {subtitle}
          </h4>
        </div>
      </Card>
      <Card extra="!flex-row flex-grow items-center rounded-[20px]">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
        </div>

        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          OVERALL RATING
          <p className="font-dm text-sm font-medium text-gray-600">
            {obj?.overallScore?.rating}
          </p>
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            {subtitle}
          </h4>
        </div>
      </Card>
    </>
  );
};

export default Widget;
