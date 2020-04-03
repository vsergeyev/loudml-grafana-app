LoudML Grafana Application
==========================

Datasource and Graph panel visualization to connect with Loud ML Machine Learning server.

![LoudML Panel in Grafana](loudml_grafana_panel.png)

Create a ML models in 1-click with "Create Baseline" button on graph.

 * select a time frame
 * click "Create Baseline"
 * train model
 * run a prediction
 * observe anomalies (as annotations on graph)

Loud ML (https://loudml.io/) uses Tensor Flow and Keras as a backend. It works with VAE models, combines the best of unsupervised and supervised learning. Based on a work "Unsupervised Anomaly Detection via Variational Auto-Encoderfor Seasonal KPIs in Web Applications" (https://arxiv.org/pdf/1802.03903.pdf) algorythm is best suitable to closely monitor various KPIs (DB connections, page views, number of online users, number of orders, etc).

