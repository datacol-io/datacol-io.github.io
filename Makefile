deploy:
	git subtree push --prefix=_site git@github.com:codecrux/datacol.git master

# force push and deploy
deploy_f:
	git push git@github.com:codecrux/datacol.git `git subtree split --prefix=_site master`:master --force
