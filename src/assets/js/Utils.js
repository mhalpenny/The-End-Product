export const fetchValuesFromS3 = async () => {
    const fetched = await fetch('https://the-end-product.s3.amazonaws.com/settings.json');
    const obj = await fetched.json();
    // console.log(obj);
    return obj;
}
