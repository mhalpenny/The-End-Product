import S3 from 'react-aws-s3';

function uploadMedia(file){

  const config = {
      bucketName: 'the-end-product',
      region: 'us-east-1',
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      // s3Url: 'https:/your-custom-s3-url.com/', /* optional */
  }
  
  const ReactS3Client = new S3(config);
  /*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
  
  /* This is optional */
  const newFileName = 'test-file';
  
  ReactS3Client
      .uploadFile(file, newFileName)
      .then(data => console.log(data))
      .catch(err => console.error(err))
  
    /**
     * {
     *   Response: {
     *     bucket: "myBucket",
     *     key: "image/test-image.jpg",
     *     location: "https://myBucket.s3.amazonaws.com/media/test-file.jpg"
     *   }
     * }
     */
}
  
export default uploadMedia