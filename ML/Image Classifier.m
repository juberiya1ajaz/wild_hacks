%% Test Image
[fname,path]=uigetfile('.png','Provide a Image for Testing');
c=strcat(path,fname);
im=imread(fname);
imshow(im);
title('Test Image');
%% Fond out which Class it Belongs to
Ftest=FeatureStatistical(im);
%% Compare with Database
load db.mat
Ftrain=db(:,1,1);
ctrain=db(:,3);
for(i=1:size(Ftrain,1))
dist(1,:)=sum(abs(Ftrain(1,:)-Ftest));
end
m=find(dist==min(dist),1);
det_class=ctrain(m);
msgbox(strcat('detected class',num2str(det_class)));