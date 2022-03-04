if [ "$1" = "master" ]; then
    yarn build
    rsync -av --delete ./build/* root@gabebanks.net:/var/www/iobot/
elif [ "$1" = "beta" ]; then
    yarn build
    rsync -av --delete ./build/* root@gabebanks.net:/var/www/betaiobot/
else
    echo "please specify master or beta"
fi
