deploy:
	git push git@github.com:codecrux/datacol.git

# force push and deploy
deploy_f:
	make deploy -f