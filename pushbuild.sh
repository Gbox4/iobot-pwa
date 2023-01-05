if [ "$1" = "master" ]; then
    yarn build
    rsync --rsync-path="sudo rsync" -av --delete ./build/* gabe@gabebanks.net:/var/www/iobot/
elif [ "$1" = "beta" ]; then
    yarn build
    rsync --rsync-path="sudo rsync" -av --delete ./build/* gabe@gabebanks.net:/var/www/betaiobot/
else
    echo "please specify master or beta"
fi
