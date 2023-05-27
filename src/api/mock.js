import Mock from "mockjs"
import homeApi from "@/api/mockData/homeApi";

Mock.mock("/home/getHomeData", homeApi.getHomeData)
