// 우리가 제작할 기능중 하나는 깃허브의 백준레파지토리를 찾아서 데이터를 가져와야 합니다.
// 이과정에서 작성한 순서대로 데이터를 받아오지 목할 수 있습니다.
// 아래의 코드는 이 문제 상황을 구현한 예시입니다. 만약 아래 처럼 문제가 발생한다면 어떻게 해결해야 할까요?

import axios from 'axios';

interface User {
  login: string;
  html_url: string;
}

interface Repo {
  name: string;
  html_url: string;
}

const getUserInfo = async (username: string): Promise<User> => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

const getUserRepos = async (username: string): Promise<Repo[]> => {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  return response.data;
};

// 문제 상황: 비동기 처리를 하지 않아 원하는 순서대로 출력되지 않는다.
const fetchUserDataProblem = (username: string) => {
  setTimeout(() => {
    getUserInfo(username).then(user => {
      console.log('User Info[problem]:', { login: user.login, html_url: user.html_url });
    });
  }, 2000);

  setTimeout(() => {
    getUserRepos(username).then(repos => {
      if (repos.length > 0) {
        console.log('User Repo[problem]:', { name: repos[0].name, html_url: repos[0].html_url });
      } else {
        console.log('User Repo[problem]: No repos found');
      }
    });
  }, 1000);
};

// 수정코드[위의 코드를 수정해보세요!]
const fetchUserDataSolution = async (username: string) => {
  try {
    const user = await getUserInfo(username);
    console.log('User Info[solution]:', { login: user.login, html_url: user.html_url });

    const repos = await getUserRepos(username);
    if (repos.length > 0) {
      console.log('User Repo[solution]:', { name: repos[0].name, html_url: repos[0].html_url });
    } else {
      console.log('User Repo[solution]: No repos found');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

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