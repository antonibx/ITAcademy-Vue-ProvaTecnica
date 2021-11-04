#build
npm run build --

# savel latest commit hash as a string
LOGSTRING=$(git log)
COMMIT=$(echo $LOGSTRING | awk '{print $2}')

#navigate into the build output directory
cd distribution

# GIT
git init
git add -A
git commit -m "deploy (commit: $COMMIT)"
git push -f https://github.com/antonibx/ITAcademy-Vue-ProvaTecnica master:gh-pages


cd ..
