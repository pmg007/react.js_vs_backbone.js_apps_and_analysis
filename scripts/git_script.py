from github import Github
import config

g = Github(config.access_token)

print ('Enter the reposiotry to explore')
r = input()
repo = g.get_repo(r.split("/", 3)[-1])
# https://github.com/facebook/react

# https://github.com/jashkenas/backbone

#### Repository related information

print ('Repository Name: ', repo.name)
print ('Related topics: ', repo.get_topics())
print ('Number of stars: ', repo.stargazers_count)
total_open_issues = len(list(repo.get_issues(state = 'open')))
print ('Total open issues: ', total_open_issues)

#### branch related information
print ('Total number of branches: ', len(list(repo.get_branches())))



#### pull requests related information
print('Total pull requests: ', len(list(repo.get_pulls(base = 'master'))))



