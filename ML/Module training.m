%% Taking an Image
[fname,path]=uigetfile('.png','Open a image as Input for Training');
c=strcat(path,fname);
im=imread(fname);
imshow(im);
title('Input Image');
c=input('Enter the Class (Number from 1-10)');
%% Feature Extraction
F=FeatureStatistical(im);
try
    S = load('db.mat');
    F=[F c];
    db=[db; F, c];
  catch ME
    disp(ME.message);
    % F  = reshape(F,[3,2]);  % Omit the duplicate reshaping - it has no effect
    % F  = reshape(F, [1,6]);
    db = [F c];
  end
  save('db.mat', 'db');