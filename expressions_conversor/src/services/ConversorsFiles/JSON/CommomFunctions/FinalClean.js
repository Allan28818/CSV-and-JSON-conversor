function FinalClean(ValueWithoutTwoPoints) {
  const withoutQuotationsPrimary = 
  ValueWithoutTwoPoints.replace(`"`,'');
  const withoutQuotationsSecondary = 
  withoutQuotationsPrimary.replace(`"`,'');

  if(withoutQuotationsSecondary.includes(",")) {
    const confirmTheClean = withoutQuotationsSecondary.replace(",", '');
    return confirmTheClean;
  } else {
    return withoutQuotationsSecondary;
  }
}

export default FinalClean;