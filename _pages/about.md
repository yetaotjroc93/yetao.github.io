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

Accepted
------
<script>
  document.write(generatePaperHTML(
    "l2hmulti.png",
    "Differentially Private Distribution Estimation Using Functional Approximation. (ICASSP 2025)",
    "Ye Tao and Anand D. Sarwate",
    "The cumulative distribution function (CDF) is fundamental due to its ability to reveal information about random variables, making it essential in studies that require privacypreserving methods to protect sensitive data. This paper introduces a novel privacy-preserving CDF method inspired by the functional analysis and functional mechanism. Our approach projects the empirical CDF into a predefined space, approximating it using specific functions, and protects the coefficients to achieve a differentially private empirical CDF. Compared to existing methods like histogram queries and adaptive quantiles, our method is preferable in decentralized settings and scenarios where CDFs must be updated with newly collected data.",
    "https://ieeexplore.ieee.org/document/10890461"
  ));
  </script>

---

<script>
  document.write(generatePaperHTML(
    "l2h.png",
    "Learning To Help: Training Models to Assist Legacy Devices. (ISIT 2024 Workshop on Information-Theoretic Methods for Trustworthy Machine Learning)",
    "Wu, Yu, and Anand Sarwate",
    "We propose a new machine learning framework Learning to Help which trains external model to assist existing legacy model.",
    "https://arxiv.org/abs/2409.16253"
  ));
  </script>

---

<script>
  document.write(generatePaperHTML(
    "phaseanti.png",
    'PhaseAnti: An anti-interference WiFi-based activity recognition system using interference-independent phase component. (IEEE Transactions on Mobile Computing 22, no. 5 (2021): 2938-2954)',
    "Huang, Jinyang, Bin Liu, Chenglin Miao, Yan Lu, Qijia Zheng, Yu Wu, Jiancun Liu, Lu Su, and Chang Wen Chen",
    "Journal version of PhaseAnti.",
    "https://ieeexplore.ieee.org/abstract/document/9613773"
  ));
  </script>

---

<script>
  document.write(generatePaperHTML(
    "antiinfer20.png",
    'Towards anti-interference WiFi-based activity recognition system using interference-independent phase component. (INFOCOM 2020)',
    "Huang, Jinyang, Bin Liu, Pengfei Liu, Chao Chen, Ning Xiao, Yu Wu, Chi Zhang, and Nenghai Yu",
    "We propose PhaseAnti, a novel HAR system to exploit the CCI- independent phase component, NLPEV (Nonlinear Phase Error Variation), of Channel State Information (CSI) to cope with the impact of CCI.",
    "https://ieeexplore.ieee.org/abstract/document/9155536/?casa_token=n0pgHUKmh8cAAAAA:J_Bw9zpG0893SLSFytpStUVNmtzSD2mEwADF7DAHmlYEN4al_KRwtSjjPPH_uy_oeRmIRdyl7A"
  ));
  </script>

---

<script>
  document.write(generatePaperHTML(
    "UIST.png",
    'Tessutivo: Contextual interactions on interactive fabrics with inductive sensing. (UIST 2019)',
    "Gong, Jun, Yu Wu, Lei Yan, Teddy Seyed, and Xing-Dong Yang",
    "We present Tessutivo, a contact-based inductive sensing technique for contextual interactions on interactive fabrics.",
    "https://dl.acm.org/doi/abs/10.1145/3332165.3347897"
  ));

</script>

Pre-print
------

<script>
  document.write(generatePaperHTML(
    "literateLLM.png",
    'Renaissance of Literate Programming in the Era of LLMs: Enhancing LLM-Based Code Generation in Large-Scale Projects. (arXiv 2024)' ,
    "Zhang, Wuyang, Yansong Li, Zeyu Dong, Yu Wu, Yingyao Zhou, Duolei Wang, Songsirou Xing, Chichun Zhou, and Da Shen.",
    "We investigate how LLMs perform under ILP-style instructions for both document-oriented tasks and entire projects. Recognizing that many researchers rely on well-structured templates to guide LLMs, we propose a concise prompt engineering method to write LP documents so LLMs can better be involved in code generation. We also examine the capacity of various LLMs to generate Scheme and Python code on the RepoBench benchmark, illustrating the advantages of our approach. Our findings indicate that ILP with LLMs can enhance LLM-based code generation in large-scale project development.",
    "https://arxiv.org/abs/2502.17441"
  ));
</script>
---
<script>
  document.write(generatePaperHTML(
    "eapcr.png",
    'EAPCR: A Universal Feature Extractor for Scientific Data without Explicit Feature Relation Patterns. (arXiv 2024)' ,
    "Yu, Zhuohang, Ling An, Yansong Li, Yu Wu, Zeyu Dong, Zhangdi Liu, Le Gao, Zhenyu Zhang, and Chichun Zhou",
    "We propose a method to learn the representation of structured scientific data with no explicit connection among features. The method employs bilinear attention and permuted CNN to understand the implicit structure.",
    "https://arxiv.org/abs/2411.08164"
  ));
</script>

---

<script>
    document.write(generatePaperHTML(
    "datafilter.png",
    'When to Trust Your Data: Enhancing Dyna-Style Model-Based Reinforcement Learning With Data Filter. (arXiv 2024)' ,
    "Li, Yansong, Zeyu Dong, Ertai Luo, Yu Wu, Shuo Wu, and Shuo Han.",
    "we introduce an out-of-distribution (OOD) data filter that removes simulated data from the estimated model that significantly diverges from data collected in the real environment. ",
    "https://arxiv.org/abs/2410.12160"
  ));
</script>

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