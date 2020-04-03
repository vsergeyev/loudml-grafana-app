LoudML Grafana Application
==========================
https://github.com/vsergeyev/loudml-grafana-app

Datasource and Graph panel visualization to connect with Loud ML Machine Learning server.

![LoudML Panel in Grafana](loudml_grafana_panel.png)

Create a ML models in 1-click with "Create Baseline" button on graph.

 * select a time frame
 * click "Create Baseline"
 * train model
 * run a prediction
 * observe anomalies (as annotations on graph)

Watch this video on YouTube:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=bxfU1N3ut70
" target="_blank"><img src="http://img.youtube.com/vi/bxfU1N3ut70/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="850" border="10" /></a>

Loud ML (https://loudml.io/) uses Tensor Flow and Keras as a backend. It works with VAE models, combines the best of unsupervised and supervised learning. Based on a work "Unsupervised Anomaly Detection via Variational Auto-Encoderfor Seasonal KPIs in Web Applications" (https://arxiv.org/pdf/1802.03903.pdf) algorythm is best suitable to closely monitor various KPIs (DB connections, page views, number of online users, number of orders, etc).

Per ML algorythm documentation:

`Donut is an unsupervisedanomaly detection algorithm based on VAE. It greatly outperforms a state-of-arts super-vised ensemble approach and a baseline VAE approach, and its best F-scores range from 0.75 to 0.9 for the studied KPIs from a top global Internet company. ... Unlike discriminative models which are designed for just one pur-pose (e.g., a classifier is designed for just computing the classifi-cation probabilityp(y|x)), generative models like VAE can derivevarious outputs. `

