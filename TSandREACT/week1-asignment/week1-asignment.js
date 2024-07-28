"use strict";
// 우리가 제작할 기능중 하나는 깃허브의 백준레파지토리를 찾아서 데이터를 가져와야 합니다.
// 이과정에서 작성한 순서대로 데이터를 받아오지 목할 수 있습니다.
// 아래의 코드는 이 문제 상황을 구현한 예시입니다. 만약 아래 처럼 문제가 발생한다면 어떻게 해결해야 할까요?
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const getUserInfo = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://api.github.com/users/${username}`);
    return response.data;
});
const getUserRepos = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://api.github.com/users/${username}/repos`);
    return response.data;
});
// 문제 상황: 비동기 처리를 하지 않아 원하는 순서대로 출력되지 않는다.
const fetchUserDataProblem = (username) => {
    setTimeout(() => {
        getUserInfo(username).then(user => {
            console.log('User Info[problem]:', { login: user.login, html_url: user.html_url });
        });
    }, 2000);
    setTimeout(() => {
        getUserRepos(username).then(repos => {
            if (repos.length > 0) {
                console.log('User Repo[problem]:', { name: repos[0].name, html_url: repos[0].html_url });
            }
            else {
                console.log('User Repo[problem]: No repos found');
            }
        });
    }, 1000);
};
// 수정코드[위의 코드를 수정해보세요!]
const fetchUserDataSolution = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 이 부분을 채워 주세요!!
        // HINT : asnyc ~ await 를 잘 사용해보세요!!
    }
    catch (error) {
        console.error('Error fetching user data:', error);
    }
});
// 실행을 통해 두 함수를 비교해 보세요!!
const runFunctions = () => {
    console.log('Fetching user data with possible async issue:');
    fetchUserDataProblem('octocat');
    setTimeout(() => {
        console.log('\nFetching user data with proper async/await:');
        fetchUserDataSolution('octocat');
    }, 4000);
};
runFunctions();
