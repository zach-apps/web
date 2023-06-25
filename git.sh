message="commit from $USER@$(hostname -s) on $(date)"
GIT=`which git`
${GIT} add --all .
${GIT} commit -m "$message"

gitPush=$(${GIT} push https://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@github.com/zacheliason/zach_website.git)

echo "$gitPush"
