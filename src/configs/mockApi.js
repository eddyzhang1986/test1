import Mock from "mockjs";

Mock.mock("/abc1.api", {
  "list|1-10": [
    {
      "id|+1": 1,
      email: "@EMAIL"
    }
  ]
});
