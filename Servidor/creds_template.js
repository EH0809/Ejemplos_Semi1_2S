let aws_keys = {
    s3: {
        region: 'us-east-2',
        accessKeyId: "AKIAX6565FGQSGH4LP5W",
        secretAccessKey: "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",
        //apiVersion: '2006-03-01',
    },
    dynamodb: {
        apiVersion: '2012-08-10',
        region: 'us-east-1',
        accessKeyId: "AKIAX6565FGQ63HZTJEH",
        secretAccessKey: "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"
    },
    rekognition: {
        region: 'us-east-1',
        accessKeyId: "AKIAX6565FGQW43IVFNE",
        secretAccessKey: "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" 
    },
    translate: {
        region: '',
        accessKeyId: "",
        secretAccessKey: "" 
    },
    cognito:{
        UserPoolId: '',
        ClientId: ''
    }
}
module.exports = aws_keys