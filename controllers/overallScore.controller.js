function calculateOverallScore(title, description, image, featuresAndBenefits, additionalInformation) {
    // Assign weights to each parameter
    const titleWeight = 0.2;
    const descriptionWeight = 0.3;
    const imageWeight = 0.1;
    const featuresAndBenefitsWeight = 0.2;
    const additionalInformationWeight = 0.2;

    // Calculate individual scores
    const titleScore = title * titleWeight;
    const descriptionScore = description * descriptionWeight;
    const imageScore = image * imageWeight;
    const featuresAndBenefitsScore = featuresAndBenefits * featuresAndBenefitsWeight;
    const additionalInformationScore = additionalInformation * additionalInformationWeight;

    // Calculate overall score
    const overallScore = titleScore + descriptionScore + imageScore + featuresAndBenefitsScore + additionalInformationScore;

    return overallScore;
}

// Example usage
const title = 8;
const description = 9;
const image = 7;
const featuresAndBenefits = 6;
const additionalInformation = 5;

const overallScore = calculateOverallScore(title, description, image, featuresAndBenefits, additionalInformation);
console.log("Overall Score:", overallScore);