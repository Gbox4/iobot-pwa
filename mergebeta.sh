git merge --no-commit --no-ff beta
find public | xargs -I {} git reset HEAD {}
find public | xargs -I {} git checkout -- {}
