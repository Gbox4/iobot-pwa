if [ -z "$1" ]
then
    echo "Please specify branch 'master' or 'beta'"
else
    git merge --no-commit --no-ff $1
    find public | xargs -I {} git reset HEAD {}
    find public | xargs -I {} git checkout -- {}
fi