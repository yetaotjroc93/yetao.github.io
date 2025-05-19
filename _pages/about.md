---
permalink: /
title: "About me"
excerpt: "Ye Tao"
author_profile: true
redirect_from: 
  - /about/
  - /about.html 
---
<script src="_pages/paper.js"></script>

I am a Ph.D. student in the Department of Electrical and Computer Engineering at Rutgers, The State University of New Jersey, working with [Prof. Anand Sarwate](https://adsarwate.github.io). I earned my Master's degree from the University of Rochester in 2019 and my Bachelor’s degree from South China University of Technology in 2014.

My research interests lie in applying differential privacy to visualization, developing distribution approximation methods under privacy constraints, and applying machine learning and deep learning techniques such as transformers to neuroimaging data analysis.

------

<div id="publications"></div>

Publications
======

Conference
------
<script>
  document.write(generatePaperHTML(
    "photo_yetao.jpeg",
    "Differentially Private Distribution Estimation Using Functional Approximation. (ICASSP 2025)",
    "Ye Tao and Anand D. Sarwate",
    "The cumulative distribution function (CDF) is fundamental due to its ability to reveal information about random variables, making it essential in studies that require privacy-preserving methods to protect sensitive data. This paper introduces a novel privacy-preserving CDF method inspired by the functional analysis and functional mechanism. Our approach projects the empirical CDF into a predefined space, approximating it using specific functions, and protects the coefficients to achieve a differentially private empirical CDF. Compared to existing methods like histogram queries and adaptive quantiles, our method is preferable in decentralized settings and scenarios where CDFs must be updated with newly collected data.",
    "https://ieeexplore.ieee.org/document/10890461"
  ));
  </script>

---

<script>
  document.write(generatePaperHTML(
    "photo_yetao.jpeg",
    "Federated Privacy-Preserving Visualization: A Vision Paper. (IEEE BigData 2024)",
    "Ye Tao, Anand D. Sarwate, Sandeep Panta, Sergey Plis, and Vince D. Calhoun",
    "Federated learning (FL) for distributed data has gained significant attention by enabling model training on local data without transferring it to a central system. While this approach protects sensitive information, risks of data leakage still persist, necessitating the integration of privacy-preserving techniques such as differential privacy. In many FL applications, tasks like exploratory data analysis or tracking and monitoring data that change over time are essential. For these purposes, analysts rely on data visualizations to make decisions or draw conclusions. This vision paper emphasizes the importance of federated privacy-preserving visualization and outlines a general pipeline for its implementation. We discuss the challenges of integrating federated visualizations with differential privacy and demonstrate the feasibility of this approach through examples, such as federated privacy-preserving boxplots, scatterplots, and correlation visualizations in neuroimaging. This highlights the need for further research in this promising field.",
    "https://ieeexplore.ieee.org/abstract/document/10825849"
  ));
  </script>

---

<script>
  document.write(generatePaperHTML(
    "photo_yetao.jpeg",
    "Privacy-Preserving Visualization of Brain Functional Network Connectivity. (ISBI 2024)",
    "Ye Tao, Anand D. Sarwate, Sandeep Panta, Sergey Plis, and Vince D. Calhoun",
    "The connectogram is a commonly used visualization of brain functional network connectivity (FNC). In this paper we study the problem of privacy-preserving connectogram visualization using differential privacy. We investigate several approaches based on perturbing correlation values and characterize their privacy cost and the impact of pre- and post-processing. In order to obtain a better privacy/visual utility tradeoff, we propose a new workflow for connectogram visualization with privacy guarantees. This workflow successfully generates connectograms similar to their non-private counterparts for group comparisons. Experiments show that qualitative assessments can be preserved while guaranteeing privacy. These results show that differential privacy is a promising method for protecting sensitive information in data visualization for biomedical data.",
    "https://ieeexplore.ieee.org/abstract/document/10635222"
  ));
  </script>

Journal
------

<script>
  document.write(generatePaperHTML(
    "photo_yetao.jpeg",
    "Differentially Private Distribution Estimation Using Functional Approximation. (arXiv)",
    "Ye Tao and Anand D. Sarwate",
    "The cumulative distribution function (CDF) is fundamental due to its ability to reveal information about random variables, making it essential in studies that require privacy-preserving methods to protect sensitive data. This paper introduces a novel privacy-preserving CDF method inspired by the functional analysis and functional mechanism. Our approach projects the empirical CDF into a predefined space, approximating it using specific functions, and protects the coefficients to achieve a differentially private empirical CDF. Compared to existing methods like histogram queries and adaptive quantiles, our method is preferable in decentralized settings and scenarios where CDFs must be updated with newly collected data.",
    "https://arxiv.org/abs/2501.06620"
  ));
</script>

---

<script>
  document.write(generatePaperHTML(
    "photo_yetao.jpeg",
    "Privacy-Preserving Visualization of Brain Functional Connectivity. (bioRxiv)",
    "Ye Tao, Anand D. Sarwate, Sandeep Panta, Sergey Plis, and Vince D. Calhoun",
    "Privacy protection is important in visualization due to the risk of leaking personal sensitive information. In this paper, we study the problem of privacy-preserving visualizations using differential privacy, employing biomedical data from neuroimaging as a use case. We investigate several approaches based on perturbing correlation values and characterize their privacy cost and the impact of pre- and post-processing. To obtain a better privacy/visual utility tradeoff, we propose workflows for connectogram and seed-based connectivity visualizations, respectively. These workflows successfully generate visualizations similar to their non-private counterparts. Experiments show that qualitative assessments can be preserved while guaranteeing privacy. These results show that differential privacy is a promising method for protecting sensitive information in data visualization.",
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC11507778/"
  ));
</script>

---

<script>
  document.write(generatePaperHTML(
    "photo_yetao.jpeg",
    "Processing speed and attention training modifies autonomic flexibility: A mechanistic intervention study. (Neuroimage 2020)",
    "Feng V. Lin, Ye Tao, Quanjing Chen, Mia Anthony, Zhengwu Zhang, Duje Tadin, and Kathi L. Heffner",
    "Adaptation capacity is critical for maintaining cognition, yet it is understudied in groups at risk for dementia. Autonomic nervous system (ANS) is critical for neurovisceral integration and is a key contributor to adaptation capacity. To determine the central nervous system’s top-down regulation of ANS, we conducted a mechanistic randomized controlled trial study, using a 6-week processing speed and attention (PS/A)-targeted intervention. Eighty-four older adults with amnestic mild cognitive impairment (aMCI) were randomized to a 6-week PS/A-targeted intervention or an active control without PS/A. Utilizing repeated measures (i.e., PS/A test different from the intervention, resting and cognitive task-based ECG, and resting fMRI) at baseline, immediately post-intervention (post-test), and 6-month follow-up, we aimed to test whether PS/A causally influences vagal control of ANS via their shared central neural pathways in aMCI. We indexed vagal control of ANS using high-frequency heart rate variability (HF-HRV) extracted from ECG data. Functional brain connectivity patterns were extracted from fMRI using advanced statistical tools. Compared to the control group, the intervention group showed significant improvement in PS/A, HF-HRV, salience network (SN), central executive network (CEN), and frontal parietal network (FPN) connectivity at post-test; the effect on SN, CEN, and FPN remained at 6-month follow-up. Changes in PS/A and SN connectivity significantly predicted change in HF-HRV from baseline to post-test and/or 6-month-follow-up. Age, neurodegeneration, nor sex did not affect these relationships. This work provides novel support for top-down regulation of PS/A and associated SN on vagal control of ANS. Intervening PS/A may be a viable approach for promoting adaptation capacity in groups at risk for dementia.",
    "https://www.sciencedirect.com/science/article/pii/S1053811920302172"
  ));
  </script>

---

<div id="awards"></div>

Awards
======

<ul>
  <li>
    <strong>SGS Research & Conference Travel Award</strong>, Rutgers University, 2024  
    <br>
    Awarded a $1,000 stipend for scholarly activities in the 2024–2025 cycle by the School of Graduate Studies.
  </li>

  <li>
    <strong>[奖项名称]</strong>, [授予机构], [年份]  
    <br>
    [简洁描述或只列名称和时间也可]
  </li>
</ul>

---

<div id="experience"></div>

Internship Experience
======

### On Accuracy of Delay and Extrapolate Method in Online Misalignment Estimation
**Position:** Research Intern  
**Location:** Bell Lab, USA  
**Duration:** June 2022 - August 2022  
**Advisor:** Carl Nuzman, Shirin Jalali  
- We rigorously analyze the accuracy and effectiveness of the classic method “delay and extrapolate” for estimating the misalignment error when applied to the least mean squares (LMS) algorithm.
- Our analysis for mean squared error of filter coefficients made corrections to similar, well-known results in the previous LMS literature. [report](/files/bell_lab.pdf)

### Tessutivo: Contextual Interactions on Interactive Fabrics with Inductive Sensing
**Position:** Research Intern  
**Location:** Dartmouth College, USA  
**Duration:** December 2018 - April 2019  
**Advisor:** Xing-Dong Yang  
- Proposed Tessutivo, a contact-based inductive sensing technique for contextual interactions on interactive fabrics.
- Built a prototype containing coils made of conductive thread with maximized sensitivity conducted by a new inductance approximation formula.

---

<div id="teaching"></div>

Teaching Experience
======

**Role:** Teaching Assistant 

**Institution:** Rutgers  

### Linear Signal and System (Fall 2023, Fall 2024) 

### Discrete Mathematics (Spring 2022)  

### Principles of Electrical Engineering (Fall 2021, Fall 2020)

### Probability and Random Processes (Spring 2021)  

---
**Institution:** USTC  

### Mathematical Logic and Graph Theory (Fall 2018)  

GA