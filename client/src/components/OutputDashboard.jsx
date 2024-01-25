import React, { useState } from "react";

const OutputDashboard = () => {
  const [data, setdata] = useState({
      1: {
        title: {
          rating: "8",
          suggestion:
            "The title is clear and concise, but it could be more descriptive. For example, it could include the product's benefits or features.",
        },
        description: {
          rating: "7",
          suggestion:
            "The description is informative and provides a good overview of the product. However, it could be more engaging and creative.",
        },
        image: {
          rating: "9",
          suggestion:
            "The image is clear and professional. However, it could be more visually appealing if it showed the product in use or in a more interesting setting.",
        },
        featuresAndBenefits: {
          rating: "8",
          suggestion:
            "The features and benefits are listed clearly and concisely. However, they could be more persuasive if they were expanded upon and explained in more detail.",
        },
        additionalInformation: {
          rating: "6",
          suggestion:
            "The additional information is accurate and provides a good overview of the product. However, it could be more organized and visually appealing.",
        },
        overallScore: {
          rating: "8",
          suggestion:
            "The overall score is a good reflection of the product's quality and value. However, it could be more accurate if it were based on a larger number of reviews.",
        },
      },
      2: {
        title: {
          rating: "8",
          suggestion:
            "The title is clear and concise, but it could be more descriptive. For example, it could be changed to 'Samsung Galaxy S22 Ultra: The Best Android Phone of 2022'.",
        },
        description: {
          rating: "7",
          suggestion:
            "The description is informative, but it could be more engaging. For example, it could include more details about the phone's features and benefits.",
        },
        image: {
          rating: "9",
          suggestion:
            "The image is high-quality and visually appealing. It could be improved by adding more context, such as a background image or a close-up of the phone.",
        },
        featuresAndBenefits: {
          rating: "8",
          suggestion:
            "The features and benefits are listed in a clear and concise way. They could be improved by adding more details about each feature and benefit.",
        },
        additionalInformation: {
          rating: "6",
          suggestion:
            "The additional information is helpful, but it could be more organized. For example, it could be divided into sections, such as 'Technical Specifications' and 'Warranty Information'.",
        },
        overallScore: {
          rating: "8",
          suggestion:
            "The overall score is a good reflection of the catalog's quality. It could be improved by adding more details about the criteria used to calculate the score.",
        },
      },
  });
  return <div>OutputDashboard</div>;
};

export default OutputDashboard;
