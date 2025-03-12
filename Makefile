########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = DyanaRahhal
SID = 1001397713
EMAIL = dhr7713@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT=PROJ03
YOUTUBE= https://youtu.be/ornNdiE1f0c
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)
	@echo $(YOUTUBE)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"