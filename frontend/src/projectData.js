// Project data arrays
const exampleProjects = [
    {
      id: 'example-1',
      title: "Exploring Virtual Reality as a Therapeutic Tool for Chronic Pain Management",
      description: "Investigating the efficacy of VR technology in alleviating chronic pain symptoms.",
      imageUrl: "https://lightyearhealth.com/wp-content/uploads/2022/03/AdobeStock_185990542-scaled.jpeg",
      postedBy: "Dr. Emily Carter, Center for Innovative Pain Solutions, HealthTech University",
      jobTitle: "Research Associate – Virtual Reality Applications in Pain Management",
      summary: "This project aims to investigate the efficacy of virtual reality (VR) technology in alleviating chronic pain symptoms in patients. By integrating immersive VR experiences with cognitive behavioral therapy, we seek to evaluate how virtual environments can reduce pain perception and improve the overall quality of life for patients suffering from chronic conditions. Participants will engage in a series of VR sessions tailored to their specific pain profiles, and we will gather data on pain levels, emotional wellbeing, and overall satisfaction.",
      roleDetails: [
        "Assisting in the design and implementation of VR sessions for participants with various chronic pain conditions.",
        "Conducting interviews and surveys to gather qualitative and quantitative data on patient experiences with VR therapy.",
        "Analyzing data collected through various methodologies, including pain scales, quality of life assessments, and physiological measurements.",
        "Collaborating with a multidisciplinary team of pain specialists, psychologists, and VR developers to refine the virtual environments and therapeutic protocols.",
        "Presenting findings at pain management conferences and contributing to publications in peer-reviewed journals."
      ],
      compensation: "This is a funded position with a salary range of $50,000-$60,000 per year, depending on experience. Benefits include health insurance and opportunities for professional development in VR technology and pain management research.",
      projectTimeline: { start: "September 1, 2023", end: "August 31, 2025" },
      roleTimeline: { start: "September 1, 2023", end: "August 31, 2024" },
      qualifications: [
        "Master's degree in Psychology, Neuroscience, or a related field with a focus on pain management or digital health interventions.",
        "Experience in clinical research methodology and data analysis, particularly in pain studies.",
        "Familiarity with VR technology and its applications in healthcare settings.",
        "Strong interpersonal skills for patient interactions and multidisciplinary team collaboration.",
        "Proficiency in statistical analysis software (e.g., SPSS, R) and experience with qualitative data analysis."
      ],
      additionalInfo: "For more information about our innovative approaches to pain management, visit www.healthtechuniversity.edu/pain-solutions."
    },
    {
      title: "Genetic Markers for Early Alzheimer's Detection",
      description: "Identifying novel genetic biomarkers for early detection of Alzheimer's disease.",
      imageUrl: "https://alzheimer.ca/sites/default/files/2020-07/Female-scientist-in-lab.jpg",
      postedBy: "Prof. Sarah Johnson, Neurodegenerative Disease Research Center, Central Medical University",
      jobTitle: "Postdoctoral Researcher - Alzheimer's Genetics",
      summary: "This project focuses on identifying novel genetic markers that could enable early detection of Alzheimer's disease before clinical symptoms appear. We will utilize advanced genomic sequencing techniques and machine learning algorithms to analyze large-scale genetic data from both Alzheimer's patients and healthy individuals across different age groups. Our goal is to develop a genetic risk score that can predict the likelihood of developing Alzheimer's disease, potentially enabling earlier interventions and better patient outcomes.",
      roleDetails: [
        "Conducting whole-genome sequencing and epigenetic profiling of patient samples.",
        "Developing and applying machine learning algorithms for identifying significant genetic markers associated with Alzheimer's risk.",
        "Performing longitudinal data analysis to track the progression of genetic changes in relation to cognitive decline.",
        "Collaborating with neurologists and cognitive scientists to correlate genetic findings with clinical and cognitive data.",
        "Designing and implementing functional studies to validate the role of identified genetic markers in Alzheimer's pathogenesis."
      ],
      compensation: "This is a full-time position with a salary range of $55,000-$65,000 per year, plus a comprehensive benefits package including health insurance, retirement plans, and paid time off. Additional funding is available for conference travel and publication costs.",
      projectTimeline: { start: "January 1, 2024", end: "December 31, 2026" },
      roleTimeline: { start: "January 1, 2024", end: "December 31, 2025" },
      qualifications: [
        "Ph.D. in Genetics, Bioinformatics, Neuroscience, or a related field.",
        "Strong background in genomic data analysis and familiarity with next-generation sequencing technologies.",
        "Proficiency in programming languages such as R or Python for data analysis and machine learning applications.",
        "Experience with large-scale genomic studies and statistical genetics, particularly in the context of neurodegenerative diseases.",
        "Excellent written and verbal communication skills for interdisciplinary collaboration and publication preparation."
      ],
      additionalInfo: "Learn more about our Alzheimer's research program and available resources at www.centralmed.edu/alzheimers-genetics."
    },
    {
      title: "Developing Novel Antibiotics to Combat Resistant Bacteria",
      description: "Researching new antibiotic compounds to address the growing threat of antibiotic-resistant bacteria.",
      imageUrl: "https://research.gatech.edu/sites/default/files/styles/news_first_image/public/news-images/Anuja-Tripathi-Antibacterial-Copper-Stainless-Steel-Etching-3127-h.jpg?itok=ePtl-83A",
      postedBy: "Dr. Michael Lee, Infectious Disease Research Institute, Global Health Sciences University",
      jobTitle: "Senior Research Scientist - Antibiotic Discovery",
      summary: "This project aims to develop novel antibiotic compounds to combat the rising threat of antibiotic-resistant bacteria, with a focus on gram-negative pathogens. We will employ a multidisciplinary approach combining high-throughput screening, rational drug design, and microbiology techniques to identify and optimize new molecules with antibacterial properties. Our focus will be on discovering antibiotics with novel mechanisms of action to overcome existing resistance mechanisms and provide new treatment options for multi-drug resistant infections.",
      roleDetails: [
        "Designing and conducting high-throughput screening assays to identify novel compounds with antibacterial activity against resistant pathogens.",
        "Performing structure-activity relationship studies and medicinal chemistry optimization of lead compounds.",
        "Evaluating the efficacy, spectrum of activity, and potential for resistance development of candidate antibiotics using in vitro and in vivo models.",
        "Investigating the mechanism of action of promising antibiotic candidates through biochemical and genetic approaches.",
        "Leading a team of junior researchers and collaborating with microbiologists, structural biologists, and clinicians to advance antibiotic development."
      ],
      compensation: "This is a full-time position with a salary range of $90,000-$120,000 per year, commensurate with experience. Benefits include comprehensive health coverage, retirement plans, and relocation assistance if needed. Additional incentives may be available based on project milestones and patent filings.",
      projectTimeline: { start: "July 1, 2023", end: "June 30, 2027" },
      roleTimeline: { start: "July 1, 2023", end: "June 30, 2025" },
      qualifications: [
        "Ph.D. in Medicinal Chemistry, Pharmacology, or a related field with at least 5 years of postdoctoral experience in antibiotic discovery.",
        "Proven track record in drug discovery, particularly in the field of antibiotics, as evidenced by publications and/or patents.",
        "Strong background in organic synthesis, medicinal chemistry, and structure-activity relationship studies.",
        "Experience with high-throughput screening, bacterial culture techniques, and in vivo infection models.",
        "Excellent project management and leadership skills, with a history of successful grant applications and industry collaborations."
      ],
      additionalInfo: "For more information about our ongoing research in infectious diseases and available research facilities, visit www.ghsu.edu/infectious-disease-research."
    },
  ];
  
const cancerProjects = [
    {
      id: 'cancer-1',
      title: "Immunotherapy Optimization for Triple-Negative Breast Cancer",
      description: "Developing improved immunotherapy protocols for triple-negative breast cancer patients.",
      imageUrl: "https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_article/public/cgov_contextual_image/2019-04/immunotherapy-attacking-cancer-cell-article.jpg",
      postedBy: "Dr. Elena Vasquez",
      researcherId: "elena-vasquez",
      institution: "Memorial Cancer Research Center",
      jobTitle: "Senior Research Scientist - Immunotherapy",
      projectSummary: "This project focuses on developing and optimizing immunotherapy protocols...",
      roleDetails: [
        "Lead research efforts in immunotherapy optimization",
        "Design and conduct clinical trials",
        "Analyze patient response data",
        "Collaborate with oncology team"
      ],
      compensation: "$90,000-$120,000 per year",
      projectTimeline: { start: "July 2023", end: "June 2024" },
      roleTimeline: { start: "July 2023", end: "June 2024" },
      qualifications: [
        "Ph.D. in Immunology or related field",
        "5+ years experience in cancer research",
        "Clinical trial experience",
        "Strong publication record"
      ],
      additionalInfo: "Join our cutting-edge research team..."
    },
    {
      title: "AI-Driven Discovery of Novel Targets for Pancreatic Cancer",
      description: "Leveraging artificial intelligence to identify new therapeutic targets for pancreatic cancer treatment.",
      postedBy: "Dr. Alex Chen, Institute for Computational Oncology, Tech University",
      jobTitle: "Computational Biologist - Cancer Target Discovery",
      summary: "This project aims to harness the power of artificial intelligence and machine learning to analyze large-scale multi-omics datasets and identify novel therapeutic targets for pancreatic cancer. We will integrate genomic, transcriptomic, proteomic, and clinical data to build predictive models of drug response and discover new vulnerabilities in pancreatic cancer cells. The ultimate goal is to accelerate the development of more effective treatments for this challenging cancer type.",
      roleDetails: [
        "Developing and applying machine learning algorithms to integrate and analyze multi-omics datasets from pancreatic cancer patients and cell lines.",
        "Implementing network analysis and systems biology approaches to identify key drivers of pancreatic cancer progression and drug resistance.",
        "Collaborating with wet-lab scientists to design and conduct validation experiments for computationally predicted targets.",
        "Creating user-friendly tools and visualizations to facilitate the interpretation of complex genomic data by biologists and clinicians.",
        "Contributing to the development of a comprehensive pancreatic cancer knowledge base to support future research efforts."
      ],
      compensation: "The salary range for this position is $85,000-$110,000 per year, commensurate with experience. Benefits include health insurance, retirement contributions, and funding for conference attendance and professional development.",
      projectTimeline: { start: "January 1, 2024", end: "December 31, 2027" },
      roleTimeline: { start: "January 1, 2024", end: "December 31, 2026" },
      qualifications: [
        "Ph.D. in Bioinformatics, Computational Biology, or a related field with a strong focus on cancer genomics and machine learning.",
        "Proficiency in programming languages such as Python, R, and experience with deep learning frameworks (e.g., TensorFlow, PyTorch).",
        "Strong background in cancer biology and familiarity with various types of omics data and analysis techniques.",
        "Experience in developing and maintaining bioinformatics pipelines and databases.",
        "Excellent communication skills for presenting complex computational results to diverse audiences."
      ],
      additionalInfo: "For more information about our computational oncology initiatives, visit www.techuniversity.edu/comp-oncology"
    },
    {
      title: "Targeting Cancer Stem Cells in Glioblastoma",
      description: "Developing therapies to eliminate cancer stem cells and prevent recurrence in glioblastoma.",
      postedBy: "Dr. Sarah Thompson, Neuro-Oncology Research Center, University Medical Center",
      jobTitle: "Postdoctoral Fellow - Cancer Stem Cell Biology",
      summary: "This project focuses on identifying and targeting cancer stem cell populations from patient-derived glioblastoma samples and cell lines. We aim to develop novel therapies that can effectively eliminate CSCs and prevent tumor recurrence. Our approach combines single-cell sequencing, lineage tracing, and functional genomics to characterize CSC populations and identify their unique vulnerabilities.",
      roleDetails: [
        "Isolating and characterizing cancer stem cell populations from patient-derived glioblastoma samples and cell lines.",
        "Performing single-cell RNA sequencing and ATAC-seq to identify gene expression programs and epigenetic features specific to glioblastoma CSCs.",
        "Conducting CRISPR screens to identify essential genes and potential therapeutic targets in CSC populations.",
        "Developing and testing small molecule inhibitors or antibody-based therapies targeting CSC-specific pathways.",
        "Establishing patient-derived xenograft models to evaluate the efficacy of CSC-targeted therapies in vivo."
      ],
      compensation: "This position offers a salary range of $55,000-$65,000 per year, with additional benefits including health insurance, retirement plans, and opportunities for career development and networking in the field of neuro-oncology.",
      projectTimeline: { start: "July 1, 2023", end: "June 30, 2026" },
      roleTimeline: { start: "July 1, 2023", end: "June 30, 2025" },
      qualifications: [
        "Ph.D. in Cancer Biology, Neuroscience, or a related field with a strong background in stem cell biology and/or brain tumor research.",
        "Experience with cell culture techniques, flow cytometry, and in vivo tumor models.",
        "Proficiency in single-cell sequencing technologies and associated data analysis.",
        "Familiarity with CRISPR-based genetic screening approaches.",
        "Strong publication record and excellent written and oral communication skills."
      ],
      additionalInfo: "Learn more about our Neuro-Oncology Research Center at www.umc.edu/neuro-oncology"
    },
    {
      title: "Liquid Biopsy Development for Early Cancer Detection",
      description: "Creating a sensitive and specific blood-based test for early detection of multiple cancer types.",
      postedBy: "Dr. Michael Wong, Cancer Diagnostics Innovation Lab, BioTech Institute",
      jobTitle: "Research Scientist - Molecular Diagnostics",
      summary: "This project aims to develop a highly sensitive and specific liquid biopsy test for the early detection of multiple cancer types. We will focus on identifying and validating novel circulating biomarkers, including cell-free DNA, circulating tumor cells, and exosomes. Our goal is to create a non-invasive screening tool that can detect cancer at its earliest stages, improving patient outcomes through early intervention.",
      roleDetails: [
        "Optimizing protocols for isolation and analysis of circulating tumor DNA, cells, and exosomes from blood samples.",
        "Developing and validating highly sensitive assays for detecting cancer-specific genetic and epigenetic alterations in liquid biopsy samples.",
        "Conducting large-scale profiling studies to identify multi-cancer biomarker signatures.",
        "Collaborating with clinicians to design and implement prospective clinical studies for biomarker validation.",
        "Exploring the integration of machine learning approaches to improve the accuracy of cancer detection and classification."
      ],
      compensation: "The salary range for this position is $80,000-$100,000 per year, depending on experience. Benefits include health and life insurance, stock options, and a generous budget for conference attendance and continuing education.",
      projectTimeline: { start: "October 1, 2023", end: "September 30, 2027" },
      roleTimeline: { start: "October 1, 2023", end: "September 30, 2025" },
      qualifications: [
        "Ph.D. in Molecular Biology, Genetics, or a related field with expertise in cancer genomics and liquid biopsy technologies.",
        "Strong background in next-generation sequencing, digital PCR, and other molecular biology techniques.",
        "Experience in developing and validating clinical diagnostic assays, preferably in a CLIA-certified laboratory setting.",
        "Familiarity with bioinformatics tools for analyzing genomic and epigenomic data.",
        "Excellent project management skills and a track record of successful collaborations with clinicians and industry partners."
      ],
      additionalInfo: "For more information about our Cancer Diagnostics Innovation Lab, visit www.biotechinstitute.org/cancer-diagnostics"
    },
    {
      title: "Nanomedicine Approaches for Targeted Cancer Drug Delivery",
      description: "Developing nanoparticle-based drug delivery systems for improved cancer treatment efficacy and reduced side effects.",
      postedBy: "Dr. Emily Zhao, Nanomedicine and Drug Delivery Lab, Institute of Bioengineering",
      jobTitle: "Biomedical Engineer - Nanomedicine",
      summary: "This project focuses on designing and developing advanced nanoparticle-based drug delivery systems for targeted cancer therapy. We aim to create smart nanocarriers that can selectively deliver chemotherapeutic agents or gene therapies to tumor sites while minimizing exposure to healthy tissues. Our research will involve the synthesis and characterization of novel nanoparticles, their functionalization with targeting ligands, and evaluation of their efficacy in preclinical models.",
      roleDetails: [
        "Designing and synthesizing biodegradable nanoparticles with controlled size, shape, and surface properties for optimal drug delivery.",
        "Developing stimuli-responsive nanocarriers that can release their payload in response to tumor-specific microenvironment cues.",
        "Functionalizing nanoparticles with targeting moieties (e.g., antibodies, peptides) for enhanced tumor-specific accumulation.",
        "Evaluating the pharmacokinetics, biodistribution, and therapeutic efficacy of nanoparticle formulations in cell culture and animal models.",
        "Collaborating with oncologists to identify clinical needs and translate promising nanoparticle formulations towards clinical applications."
      ],
      compensation: "This position offers a salary range of $75,000-$95,000 per year, commensurate with experience. Benefits include health insurance, retirement plans, and opportunities for professional development and conference travel.",
      projectTimeline: { start: "March 1, 2024", end: "February 28, 2028" },
      roleTimeline: { start: "March 1, 2024", end: "February 29, 2026" },
      qualifications: [
        "Ph.D. in Biomedical Engineering, Materials Science, or a related field with a focus on drug delivery and nanomedicine.",
        "Strong background in nanoparticle synthesis, characterization, and surface modification techniques.",
        "Experience with in vitro and in vivo evaluation of drug delivery systems.",
        "Familiarity with imaging techniques such as confocal microscopy, electron microscopy, and small animal imaging.",
        "Excellent communication and teamwork skills for collaborating in a multidisciplinary research environment."
      ],
      additionalInfo: "Learn more about our Nanomedicine and Drug Delivery Lab at www.bioengineering.edu/nanomedicine-lab"
    },
    {
      title: "Epigenetic Therapies for Pediatric Brain Tumors",
      description: "Investigating epigenetic mechanisms and developing targeted therapies for aggressive pediatric brain cancers.",
      postedBy: "Dr. Laura Martinez, Pediatric Neuro-Oncology Division, Children's Research Hospital",
      jobTitle: "Research Scientist - Pediatric Cancer Epigenetics",
      summary: "This project aims to uncover the epigenetic mechanisms driving the development and progression of aggressive pediatric brain tumors, with a focus on diffuse intrinsic pontine glioma (DIPG) and atypical teratoid/rhabdoid tumors (AT/RT). We will investigate the role of histone modifications, DNA methylation, and chromatin remodeling in these cancers and develop novel epigenetic therapies to improve outcomes for young patients.",
      roleDetails: [
        "Performing genome-wide epigenetic profiling (ChIP-seq, ATAC-seq, DNA methylation arrays) of pediatric brain tumor samples and cell lines.",
        "Investigating the functional consequences of epigenetic alterations using CRISPR-based epigenome editing techniques.",
        "Developing and testing small molecule inhibitors targeting epigenetic regulators implicated in pediatric brain cancers.",
        "Establishing patient-derived xenograft models and organoids to evaluate the efficacy of epigenetic therapies.",
        "Collaborating with clinicians to design early-phase clinical trials for promising epigenetic interventions."
      ],
      compensation: "The salary range for this position is $85,000-$105,000 per year, based on experience. Benefits include comprehensive health coverage, retirement plans, and opportunities for career advancement in pediatric cancer research.",
      projectTimeline: { start: "August 1, 2023", end: "July 31, 2027" },
      roleTimeline: { start: "August 1, 2023", end: "July 31, 2025" },
      qualifications: [
        "Ph.D. in Cancer Biology, Genetics, or a related field with a strong background in epigenetics and pediatric cancers.",
        "Expertise in epigenomic profiling techniques and associated data analysis.",
        "Experience with CRISPR-based genetic and epigenetic manipulation methods.",
        "Familiarity with preclinical drug development and in vivo models of brain tumors.",
        "Strong publication record and excellent communication skills for interdisciplinary collaboration."
      ],
      additionalInfo: "For more information about our Pediatric Neuro-Oncology research programs, visit www.childrensresearchhospital.org/neuro-oncology"
    },
    {
      title: "Precision Oncology for Colorectal Cancer",
      description: "Developing personalized treatment strategies for colorectal cancer based on molecular profiling.",
      postedBy: "Dr. Robert Chen, Gastrointestinal Cancer Center, University Cancer Institute",
      jobTitle: "Clinical Research Scientist - Precision Oncology",
      summary: "This project focuses on advancing precision medicine approaches for colorectal cancer treatment. We aim to develop personalized therapeutic strategies based on comprehensive molecular profiling of patient tumors, including genomic, transcriptomic, and proteomic analyses. Our goal is to identify novel biomarkers for treatment response and resistance, and to design tailored combination therapies that improve outcomes for colorectal cancer patients.",
      roleDetails: [
        "Coordinating the collection and molecular profiling of colorectal cancer patient samples, including biopsies and circulating tumor DNA.",
        "Analyzing multi-omics data to identify molecular subtypes and potential therapeutic targets in colorectal cancer.",
        "Developing and validating predictive biomarkers for response to targeted therapies and immunotherapies.",
        "Designing and implementing prospective clinical trials to evaluate personalized treatment strategies.",
        "Collaborating with pharmaceutical partners to facilitate the testing of novel targeted agents in biomarker-selected patient populations."
      ],
      compensation: "This position offers a salary range of $90,000-$120,000 per year, depending on experience. Benefits include health insurance, retirement plans, and opportunities for continuing education in oncology and precision medicine.",
      projectTimeline: { start: "November 1, 2023", end: "October 31, 2027" },
      roleTimeline: { start: "November 1, 2023", end: "October 31, 2025" },
      qualifications: [
        "M.D. or Ph.D. in Oncology, Molecular Biology, or a related field with experience in translational cancer research.",
        "Strong background in cancer genomics, biomarker development, and clinical trial design.",
        "Proficiency in bioinformatics and statistical analysis of large-scale genomic datasets.",
        "Experience in working with multidisciplinary teams including clinicians, basic scientists, and computational biologists.",
        "Excellent project management and communication skills, with a track record of successful grant applications and publications."
      ],
      additionalInfo: "Learn more about our Gastrointestinal Cancer Center and precision oncology initiatives at www.uci.edu/gi-cancer-center"
    },
    {
      title: "CAR-NK Cell Therapy for Hematological Malignancies",
      description: "Developing next-generation CAR-NK cell therapies for leukemia and lymphoma.",
      postedBy: "Dr. Sophia Lee, Cell Therapy Innovation Lab, National Cancer Research Center",
      jobTitle: "Senior Scientist - Cellular Immunotherapy",
      summary: "This project aims to develop and optimize chimeric antigen receptor (CAR)-modified natural killer (NK) cell therapies for the treatment of hematological malignancies. We will focus on enhancing the persistence, tumor-targeting ability, and anti-tumor efficacy of CAR-NK cells through genetic engineering and novel expansion protocols. Our goal is to create off-the-shelf CAR-NK cell products that offer a safer and more accessible alternative to current CAR-T cell therapies.",
      roleDetails: [
        "Designing and constructing novel CAR constructs optimized for NK cell function and persistence.",
        "Developing and optimizing protocols for large-scale expansion and genetic modification of NK cells.",
        "Evaluating the anti-tumor efficacy and safety profile of CAR-NK cells in vitro and in animal models of leukemia and lymphoma.",
        "Investigating strategies to enhance CAR-NK cell trafficking, persistence, and functionality in the tumor microenvironment.",
        "Collaborating with clinicians and regulatory affairs specialists to translate promising CAR-NK cell therapies to clinical trials."
      ],
      compensation: "The salary range for this position is $100,000-$130,000 per year, commensurate with experience. Benefits include comprehensive health coverage, retirement plans, and opportunities for patent authorship and royalties from successfully developed therapies.",
      projectTimeline: { start: "February 1, 2024", end: "January 31, 2028" },
      roleTimeline: { start: "February 1, 2024", end: "January 31, 2026" },
      qualifications: [
        "Ph.D. in Immunology, Cell Biology, or a related field with extensive experience in cellular immunotherapy and NK cell biology.",
        "Strong background in genetic engineering techniques, including viral vector design and CRISPR-based approaches.",
        "Experience with flow cytometry, multi-color immunofluorescence, and in vivo imaging techniques.",
        "Familiarity with GMP manufacturing processes for cell therapy products.",
        "Excellent project management skills and a track record of successful collaborations with industry partners and clinicians."
      ],
      additionalInfo: "For more information about our Cell Therapy Innovation Lab and ongoing clinical trials, visit www.ncrc.org/cell-therapy-lab"
    },
    {
      title: "Targeting Metabolic Vulnerabilities in Pancreatic Cancer",
      description: "Investigating metabolic dependencies of pancreatic cancer cells to develop novel therapeutic strategies.",
      postedBy: "Dr. Amanda Patel, Pancreatic Cancer Research Institute, University Medical Center",
      jobTitle: "Research Scientist - Cancer Metabolism",
      summary: "This project focuses on identifying and exploiting the unique metabolic vulnerabilities of pancreatic cancer cells. We aim to uncover novel metabolic pathways that are essential for pancreatic tumor growth and metastasis, and develop targeted therapies to disrupt these processes. Our research will combine metabolomics profiling, functional genomics screens, and preclinical models to identify and validate new therapeutic targets in pancreatic cancer metabolism.",
      roleDetails: [
        "Conducting metabolomics profiling of pancreatic cancer cell lines, patient-derived organoids, and tumor samples to identify altered metabolic pathways.",
        "Performing CRISPR-based genetic screens to identify metabolic genes essential for pancreatic cancer cell survival and growth.",
        "Developing and characterizing small molecule inhibitors targeting key metabolic enzymes in pancreatic cancer.",
        "Investigating the impact of metabolic therapies on the tumor microenvironment and immune cell function.",
        "Establishing patient-derived xenograft models to evaluate the efficacy of metabolic-targeted therapies in vivo."
      ],
      compensation: "This position offers a salary range of $80,000-$100,000 per year, based on experience. Benefits include health insurance, retirement plans, and funding for conference attendance and professional development.",
      projectTimeline: { start: "May 1, 2024", end: "April 30, 2028" },
      roleTimeline: { start: "May 1, 2024", end: "April 30, 2026" },
      qualifications: [
        "Ph.D. in Cancer Biology, Biochemistry, or a related field with a strong background in cancer metabolism.",
        "Expertise in metabolomics techniques and analysis of metabolic flux data.",
        "Experience with CRISPR-based genetic screening and validation approaches.",
        "Familiarity with in vivo tumor models and preclinical drug development.",
        "Strong publication record and excellent communication skills for interdisciplinary collaboration."
      ],
      additionalInfo: "Learn more about our Pancreatic Cancer Research Institute at www.umc.edu/pancreatic-cancer-institute"
    },
    {
      title: "AI-Powered Radiomics for Lung Cancer Diagnosis and Prognosis",
      description: "Developing advanced AI algorithms for lung cancer detection, classification, and treatment response prediction using medical imaging.",
      postedBy: "Dr. James Wilson, Thoracic Oncology and AI Lab, Cancer AI Institute",
      jobTitle: "Machine Learning Scientist - Medical Imaging",
      summary: "This project aims to develop and implement cutting-edge artificial intelligence and machine learning algorithms for the analysis of lung cancer medical images. We will focus on creating AI-powered tools for early detection, accurate staging, and treatment response prediction in lung cancer patients. Our goal is to improve diagnostic accuracy, optimize treatment selection, and ultimately enhance patient outcomes through the integration of AI-based radiomics into clinical practice.",
      roleDetails: [
        "Developing deep learning models for automated lung nodule detection and classification in CT scans.",
        "Creating AI algorithms to extract quantitative imaging features (radiomics) from lung cancer images for improved prognostic and predictive modeling.",
        "Implementing multi-modal learning approaches to integrate radiomics data with clinical and genomic information for comprehensive patient profiling.",
        "Designing and conducting retrospective and prospective studies to validate AI models in diverse patient populations.",
        "Collaborating with clinicians to develop user-friendly interfaces for AI-powered diagnostic and prognostic tools."
      ],
      compensation: "The salary range for this position is $110,000-$140,000 per year, depending on experience. Benefits include health insurance, stock options, and opportunities for conference attendance and continuing education in AI and oncology.",
      projectTimeline: { start: "September 1, 2023", end: "August 31, 2027" },
      roleTimeline: { start: "September 1, 2023", end: "August 31, 2025" },
      qualifications: [
        "Ph.D. in Computer Science, Biomedical Engineering, or a related field with a strong focus on medical image analysis and machine learning.",
        "Expertise in deep learning frameworks (e.g., TensorFlow, PyTorch) and experience with medical imaging datasets (DICOM).",
        "Strong background in computer vision, image processing, and radiomics feature extraction.",
        "Familiarity with lung cancer biology and clinical aspects of thoracic oncology.",
        "Excellent programming skills and experience with deploying machine learning models in clinical settings."
      ],
      additionalInfo: "For more information about our Thoracic Oncology and AI Lab, visit www.canceraiinstitute.org/thoracic-ai-lab"
    },
    {
      title: "Targeting DNA Repair Deficiencies in Ovarian Cancer",
      description: "Exploiting synthetic lethality approaches to develop targeted therapies for ovarian cancer patients with DNA repair deficiencies.",
      postedBy: "Dr. Elizabeth Chen, Gynecologic Oncology Research Center, Women's Cancer Institute",
      jobTitle: "Senior Scientist - DNA Repair and Cancer Therapeutics",
      summary: "This project focuses on identifying and exploiting synthetic lethal interactions in ovarian cancer cells with deficiencies in DNA repair pathways. We aim to develop novel targeted therapies that selectively kill cancer cells harboring specific DNA repair defects while sparing normal cells. Our research will involve comprehensive genomic profiling of ovarian cancer samples, high-throughput drug screens, and the development of biomarkers for patient stratification.",
      roleDetails: [
        "Conducting genomic and functional analyses to identify DNA repair deficiencies in ovarian cancer cell lines and patient samples.",
        "Performing high-throughput synthetic lethal screens to discover novel therapeutic targets for different DNA repair-deficient backgrounds.",
        "Developing and characterizing small molecule inhibitors targeting synthetic lethal interactions in DNA repair-deficient ovarian cancers.",
        "Investigating mechanisms of resistance to DNA repair-targeted therapies and developing strategies to overcome them.",
        "Collaborating with clinicians to design biomarker-driven clinical trials for DNA repair-targeted therapies in ovarian cancer patients."
      ],
      compensation: "This position offers a salary range of $95,000-$125,000 per year, commensurate with experience. Benefits include comprehensive health coverage, retirement plans, and opportunities for patent authorship and royalties from successfully developed therapies.",
      projectTimeline: { start: "January 1, 2024", end: "December 31, 2027" },
      roleTimeline: { start: "January 1, 2024", end: "December 31, 2025" },
      qualifications: [
        "Ph.D. in Cancer Biology, Molecular Biology, or a related field with extensive experience in DNA repair mechanisms and cancer therapeutics.",
        "Strong background in functional genomics, high-throughput screening, and preclinical drug development.",
        "Expertise in CRISPR-based genetic manipulation and synthetic lethality concepts.",
        "Familiarity with ovarian cancer biology and clinical aspects of gynecologic oncology.",
        "Excellent project management skills and a track record of successful collaborations with industry partners and clinicians."
      ],
      additionalInfo: "Learn more about our Gynecologic Oncology Research Center at www.womenscancerinstitute.org/gynonc-research"
    },
    {
      title: "Oncolytic Virus Therapy for Metastatic Melanoma",
      description: "Developing and optimizing oncolytic viruses for the treatment of advanced melanoma.",
      postedBy: "Dr. Michael Stern, Melanoma Research and Therapy Center, Comprehensive Cancer Institute",
      jobTitle: "Research Scientist - Oncolytic Virology",
      summary: "This project aims to develop and enhance oncolytic virus therapies for the treatment of metastatic melanoma. We will focus on engineering viruses to selectively replicate in and destroy melanoma cells while stimulating anti-tumor immune responses. Our goal is to create novel oncolytic virus platforms that can be used alone or in combination with immune checkpoint inhibitors to improve outcomes for patients with advanced melanoma.",
      roleDetails: [
        "Designing and constructing genetically modified oncolytic viruses with enhanced tumor selectivity and immunostimulatory properties.",
        "Evaluating the anti-tumor efficacy and safety profile of engineered oncolytic viruses in vitro and in animal models of melanoma.",
        "Investigating mechanisms of oncolytic virus-induced anti-tumor immunity and strategies to enhance immune cell recruitment and activation.",
        "Developing combination strategies with immune checkpoint inhibitors and other immunotherapies to potentiate oncolytic virus efficacy.",
        "Collaborating with clinicians to design and implement early-phase clinical trials for promising oncolytic virus therapies."
      ],
      compensation: "The salary range for this position is $85,000-$110,000 per year, based on experience. Benefits include health insurance, retirement plans, and opportunities for conference travel and continuing education in cancer immunotherapy.",
      projectTimeline: { start: "July 1, 2023", end: "June 30, 2027" },
      roleTimeline: { start: "July 1, 2023", end: "June 30, 2025" },
      qualifications: [
        "Ph.D. in Virology, Immunology, or a related field with a strong background in cancer biology and oncolytic virus development.",
        "Expertise in virus engineering techniques and experience with preclinical evaluation of oncolytic viruses.",
        "Strong understanding of tumor immunology and familiarity with various immunotherapy approaches.",
        "Experience with in vivo tumor models and imaging techniques for tracking virus replication and tumor growth.",
        "Excellent communication skills and a track record of successful grant applications and publications in the field of oncolytic virotherapy."
      ],
      additionalInfo: "For more information about our Melanoma Research and Therapy Center, visit www.comprehensivecancerinstitute.org/melanoma-center"
    }
  ];
  
const influenzaProjects = [
    {
      title: "Universal Influenza Vaccine Development",
      description: "Designing a broadly protective influenza vaccine targeting conserved viral epitopes.",
      postedBy: "Dr. Sarah Johnson, Vaccine Research Institute, Global Health University",
      jobTitle: "Senior Immunologist - Influenza Vaccines",
      summary: "This project aims to develop a universal influenza vaccine that provides broad protection against multiple influenza strains. We will focus on identifying and targeting highly conserved epitopes across different influenza subtypes to elicit broadly neutralizing antibodies. Our goal is to create a vaccine that offers long-lasting immunity against seasonal and pandemic influenza strains, potentially revolutionizing influenza prevention strategies.",
      roleDetails: [
        "Identifying and characterizing conserved influenza epitopes using computational modeling and structural biology approaches.",
        "Designing and testing novel immunogen constructs to elicit broadly neutralizing antibodies against influenza.",
        "Evaluating vaccine candidates in vitro and in animal models for immunogenicity and protective efficacy.",
        "Collaborating with structural biologists and computational scientists to optimize antigen design.",
        "Preparing regulatory documents and coordinating with clinical partners to advance promising candidates to human trials."
      ],
      compensation: "This position offers a salary range of $90,000-$120,000 per year, depending on experience. Benefits include health insurance, retirement plans, and opportunities for conference travel and professional development.",
      projectTimeline: { start: "September 1, 2023", end: "August 31, 2027" },
      roleTimeline: { start: "September 1, 2023", end: "August 31, 2025" },
      qualifications: [
        "Ph.D. in Immunology, Virology, or a related field with extensive experience in vaccine development.",
        "Strong background in B cell immunology and antibody engineering.",
        "Experience with influenza virus research and familiarity with current influenza vaccine technologies.",
        "Proficiency in immunological assays, including neutralization assays and animal model studies.",
        "Excellent project management and communication skills for coordinating multidisciplinary research teams."
      ],
      additionalInfo: "Learn more about our Vaccine Research Institute at www.globalhealth.edu/vaccine-research"
    },
    {
      title: "AI-Driven Prediction of Influenza Virus Evolution",
      description: "Developing machine learning models to predict influenza virus antigenic drift and improve vaccine strain selection.",
      postedBy: "Dr. Michael Chen, Computational Virology Lab, Tech Institute for Infectious Diseases",
      jobTitle: "Machine Learning Scientist - Viral Evolution",
      summary: "This project focuses on creating advanced machine learning algorithms to predict the evolution of influenza viruses, particularly antigenic drift. By analyzing large-scale genomic and antigenic data, we aim to develop models that can accurately forecast emerging influenza strains. The ultimate goal is to enhance the vaccine strain selection process, leading to more effective seasonal influenza vaccines.",
      roleDetails: [
        "Developing and implementing machine learning models for predicting influenza virus evolution, focusing on antigenic drift.",
        "Analyzing large-scale influenza genomic and antigenic datasets to identify patterns and trends in viral evolution.",
        "Creating visualization tools to represent evolutionary trajectories and antigenic relationships among influenza strains.",
        "Collaborating with virologists and epidemiologists to integrate biological insights into predictive models.",
        "Participating in WHO consultations on vaccine strain selection to provide AI-driven recommendations."
      ],
      compensation: "The salary range for this position is $100,000-$130,000 per year, commensurate with experience. Benefits include health insurance, stock options, and funding for conference attendance and continuing education in AI and virology.",
      projectTimeline: { start: "January 1, 2024", end: "December 31, 2027" },
      roleTimeline: { start: "January 1, 2024", end: "December 31, 2026" },
      qualifications: [
        "Ph.D. in Computer Science, Bioinformatics, or a related field with a strong focus on machine learning and viral evolution.",
        "Expertise in developing and applying machine learning algorithms, particularly in the context of biological sequence analysis.",
        "Strong programming skills in Python and experience with deep learning frameworks (e.g., TensorFlow, PyTorch).",
        "Familiarity with influenza biology and antigenic drift concepts.",
        "Excellent communication skills for presenting complex computational results to diverse audiences."
      ],
      additionalInfo: "For more information about our Computational Virology Lab, visit www.techinstitute.org/compvirology"
    },
    {
      title: "Host-Pathogen Interactions in Severe Influenza",
      description: "Investigating the molecular mechanisms underlying severe influenza infections to identify novel therapeutic targets.",
      postedBy: "Dr. Emily Wong, Respiratory Infections Research Center, University Medical Institute",
      jobTitle: "Research Scientist - Viral Immunology",
      summary: "This project aims to elucidate the host-pathogen interactions that contribute to severe influenza infections. We will focus on identifying key molecular pathways and host factors that influence disease severity and viral replication. Our goal is to uncover novel therapeutic targets that can be exploited to develop new treatments for severe influenza, potentially reducing morbidity and mortality associated with influenza infections.",
      roleDetails: [
        "Conducting transcriptomic and proteomic analyses of influenza-infected human respiratory epithelial cells and animal models.",
        "Performing CRISPR screens to identify host factors essential for influenza virus replication and pathogenesis.",
        "Investigating the role of the innate immune response in influenza severity, focusing on interferon signaling and inflammatory pathways.",
        "Developing and testing small molecule inhibitors targeting identified host factors to assess their potential as anti-influenza therapeutics.",
        "Collaborating with clinicians to analyze samples from severe influenza cases and validate findings in human populations."
      ],
      compensation: "This position offers a salary range of $80,000-$100,000 per year, based on experience. Benefits include comprehensive health coverage, retirement plans, and opportunities for professional development in viral immunology.",
      projectTimeline: { start: "July 1, 2023", end: "June 30, 2027" },
      roleTimeline: { start: "July 1, 2023", end: "June 30, 2025" },
      qualifications: [
        "Ph.D. in Immunology, Virology, or a related field with a strong background in respiratory viral infections.",
        "Expertise in molecular biology techniques, including RNA-seq, proteomics, and CRISPR-based genetic screens.",
        "Experience with in vitro and in vivo models of viral infections, particularly influenza.",
        "Familiarity with bioinformatics tools for analyzing large-scale omics datasets.",
        "Strong publication record and excellent written and oral communication skills."
      ],
      additionalInfo: "Learn more about our Respiratory Infections Research Center at www.umirc.edu/respiratory-infections"
    },
    {
      title: "Nasal Spray Influenza Vaccine Development",
      description: "Creating a novel intranasal influenza vaccine for needle-free and enhanced mucosal immunity.",
      postedBy: "Dr. Laura Martinez, Mucosal Immunology Lab, Vaccine Innovation Center",
      jobTitle: "Immunologist - Mucosal Vaccines",
      summary: "This project focuses on developing an intranasal influenza vaccine that can induce robust mucosal and systemic immunity. We aim to create a needle-free vaccine formulation that is easy to administer and provides superior protection against influenza by stimulating immune responses at the site of viral entry. Our research will involve designing novel adjuvants and delivery systems optimized for intranasal administration.",
      roleDetails: [
        "Designing and testing novel influenza antigen formulations and adjuvants for intranasal delivery.",
        "Evaluating mucosal and systemic immune responses induced by intranasal vaccine candidates in animal models.",
        "Investigating the impact of intranasal vaccination on resident memory T cells in the respiratory tract.",
        "Developing strategies to enhance vaccine stability and shelf-life for potential use in resource-limited settings.",
        "Collaborating with industry partners to scale up production and advance promising candidates to clinical trials."
      ],
      compensation: "The salary range for this position is $85,000-$110,000 per year, depending on experience. Benefits include health insurance, retirement contributions, and opportunities for conference travel and continuing education in vaccinology.",
      projectTimeline: { start: "October 1, 2023", end: "September 30, 2027" },
      roleTimeline: { start: "October 1, 2023", end: "September 30, 2025" },
      qualifications: [
        "Ph.D. in Immunology, Pharmaceutical Sciences, or a related field with expertise in mucosal immunology and vaccine development.",
        "Strong background in formulation and delivery of biologics, particularly for intranasal administration.",
        "Experience with animal models of respiratory infections and immunological assays for assessing mucosal immunity.",
        "Familiarity with regulatory requirements for vaccine development and GMP manufacturing processes.",
        "Excellent project management skills and a track record of successful collaborations with industry partners."
      ],
      additionalInfo: "For more information about our Mucosal Immunology Lab and ongoing vaccine projects, visit www.vacinnov.org/mucosal-immunology"
    },
    {
      title: "Influenza Virus-Host Protein Interactome Mapping",
      description: "Comprehensive mapping of influenza virus-host protein interactions to identify novel antiviral targets.",
      postedBy: "Dr. David Lee, Molecular Virology Department, Institute for Infectious Diseases",
      jobTitle: "Research Scientist - Viral-Host Interactions",
      summary: "This project aims to create a comprehensive map of protein-protein interactions between influenza virus components and host cellular factors. By employing advanced proteomics and interactomics approaches, we seek to identify key host proteins and pathways exploited by the virus during its replication cycle. Our goal is to uncover novel therapeutic targets for broad-spectrum antiviral development against influenza.",
      roleDetails: [
        "Conducting large-scale affinity purification-mass spectrometry (AP-MS) experiments to identify virus-host protein interactions.",
        "Performing CRISPR screens to validate the functional relevance of identified host factors in influenza virus replication.",
        "Developing and applying proximity labeling techniques (e.g., BioID, APEX) to capture transient and compartment-specific interactions.",
        "Integrating interactomics data with other -omics datasets to build a systems-level understanding of influenza virus infection.",
        "Collaborating with structural biologists and medicinal chemists to characterize and target key virus-host protein interfaces."
      ],
      compensation: "This position offers a salary range of $75,000-$95,000 per year, based on experience. Benefits include health insurance, retirement plans, and funding for conference attendance and professional development.",
      projectTimeline: { start: "March 1, 2024", end: "February 28, 2028" },
      roleTimeline: { start: "March 1, 2024", end: "February 29, 2026" },
      qualifications: [
        "Ph.D. in Molecular Biology, Biochemistry, or a related field with a strong background in virology and protein-protein interactions.",
        "Expertise in proteomics techniques, including AP-MS and proximity labeling methods.",
        "Experience with CRISPR-based genetic screens and functional genomics approaches.",
        "Proficiency in bioinformatics analysis of large-scale proteomics and interactomics datasets.",
        "Strong publication record and excellent communication skills for interdisciplinary collaboration."
      ],
      additionalInfo: "Learn more about our Molecular Virology Department at www.iid.edu/molecular-virology"
    },
    {
      title: "Influenza Transmission Dynamics and Environmental Factors",
      description: "Investigating the impact of environmental factors on influenza transmission to improve epidemic forecasting.",
      postedBy: "Dr. Jennifer Taylor, Environmental Health and Epidemiology Center, Public Health Institute",
      jobTitle: "Epidemiologist - Respiratory Virus Transmission",
      summary: "This project focuses on elucidating the complex relationships between environmental factors and influenza transmission dynamics. We aim to integrate meteorological data, air quality measurements, and population mobility patterns with influenza surveillance data to develop more accurate models for predicting influenza spread. Our goal is to enhance epidemic forecasting capabilities and inform targeted public health interventions.",
      roleDetails: [
        "Analyzing large-scale epidemiological datasets in conjunction with environmental and climate data to identify factors influencing influenza transmission.",
        "Developing and validating mathematical models to predict influenza spread based on environmental variables and population dynamics.",
        "Conducting field studies to collect data on local environmental conditions and their association with influenza incidence.",
        "Collaborating with climate scientists and environmental health experts to assess the impact of long-term climate changes on influenza epidemiology.",
        "Working with public health officials to translate research findings into actionable recommendations for influenza prevention and control."
      ],
      compensation: "The salary range for this position is $70,000-$90,000 per year, commensurate with experience. Benefits include health insurance, retirement plans, and opportunities for fieldwork and conference travel.",
      projectTimeline: { start: "August 1, 2023", end: "July 31, 2027" },
      roleTimeline: { start: "August 1, 2023", end: "July 31, 2025" },
      qualifications: [
        "Ph.D. in Epidemiology, Environmental Health, or a related field with a focus on infectious disease transmission.",
        "Strong background in statistical analysis and experience with epidemiological modeling techniques.",
        "Proficiency in programming languages such as R or Python for data analysis and visualization.",
        "Familiarity with GIS tools and experience working with spatial data.",
        "Excellent project management and communication skills for coordinating multi-disciplinary research teams and engaging with public health stakeholders."
      ],
      additionalInfo: "For more information about our Environmental Health and Epidemiology Center, visit www.publichealthinstitute.org/env-health-epi"
    },
    {
      title: "Novel Antiviral Drug Discovery for Influenza",
      description: "Identifying and developing new small molecule inhibitors targeting influenza virus replication.",
      postedBy: "Dr. Robert Chen, Antiviral Research Division, Pharmaceutical Sciences Institute",
      jobTitle: "Medicinal Chemist - Antiviral Drug Discovery",
      summary: "This project aims to discover and develop novel small molecule inhibitors of influenza virus replication. We will focus on targeting essential viral proteins and host factors critical for the influenza life cycle. Our goal is to identify lead compounds with potent antiviral activity and favorable drug-like properties that can be advanced to preclinical development, potentially leading to new therapeutic options for influenza infections.",
      roleDetails: [
        "Designing and synthesizing libraries of small molecules targeting influenza virus proteins or essential host factors.",
        "Conducting structure-activity relationship (SAR) studies to optimize lead compounds for potency, selectivity, and drug-like properties.",
        "Collaborating with virologists to evaluate the antiviral activity and mechanism of action of synthesized compounds.",
        "Performing in silico modeling and molecular docking studies to guide rational drug design efforts.",
        "Working with ADME specialists to assess and optimize the pharmacokinetic properties of promising antiviral candidates."
      ],
      compensation: "This position offers a salary range of $90,000-$120,000 per year, depending on experience. Benefits include health insurance, retirement plans, and opportunities for patent authorship and royalties from successfully developed compounds.",
      projectTimeline: { start: "January 1, 2024", end: "December 31, 2027" },
      roleTimeline: { start: "January 1, 2024", end: "December 31, 2025" },
      qualifications: [
        "Ph.D. in Medicinal Chemistry, Organic Chemistry, or a related field with experience in antiviral drug discovery.",
        "Strong background in synthetic organic chemistry and structure-based drug design.",
        "Familiarity with antiviral assays and experience in lead optimization processes.",
        "Proficiency in computational chemistry tools and molecular modeling software.",
        "Excellent project management skills and a track record of successful collaborations with biologists and pharmacologists."
      ],
      additionalInfo: "Learn more about our Antiviral Research Division at www.psi.edu/antiviral-research"
    },
    {
      title: "Systems Biology of Influenza Virus-Induced Lung Inflammation",
      description: "Applying systems biology approaches to understand and modulate the inflammatory response in severe influenza infections.",
      postedBy: "Dr. Sophia Kim, Systems Immunology Lab, Integrative Biology Institute",
      jobTitle: "Systems Biologist - Viral Immunology",
      summary: "This project aims to apply systems biology approaches to comprehensively characterize the inflammatory response in severe influenza infections. We will integrate multi-omics data (transcriptomics, proteomics, metabolomics) from influenza-infected lung tissues to build predictive models of the host response. Our goal is to identify key regulatory nodes that can be targeted to modulate excessive inflammation and reduce lung damage in severe influenza cases.",
      roleDetails: [
        "Conducting multi-omics profiling of influenza-infected lung tissues from animal models and human samples.",
        "Developing computational pipelines to integrate and analyze large-scale omics datasets.",
        "Applying network analysis and machine learning approaches to identify key drivers of influenza-induced inflammation.",
        "Collaborating with immunologists to validate computational predictions using in vitro and in vivo models.",
        "Designing targeted interventions to modulate the inflammatory response and improve outcomes in severe influenza."
      ],
      compensation: "The salary range for this position is $85,000-$110,000 per year, based on experience. Benefits include comprehensive health coverage, retirement plans, and funding for conference travel and professional development.",
      projectTimeline: { start: "June 1, 2023", end: "May 31, 2027" },
      roleTimeline: { start: "June 1, 2023", end: "May 31, 2025" },
      qualifications: [
        "Ph.D. in Systems Biology, Computational Biology, or a related field with a strong background in immunology.",
        "Expertise in analyzing and integrating multi-omics datasets, including experience with relevant bioinformatics tools and databases.",
        "Proficiency in programming languages such as R or Python for data analysis and modeling.",
        "Familiarity with network analysis, machine learning, and dynamical systems modeling.",
        "Strong publication record and excellent communication skills for interdisciplinary collaboration."
      ],
      additionalInfo: "For more information about our Systems Immunology Lab and available computational resources, visit www.ibi.edu/systems-immunology"
    }
  ];
  
 const coronavirusProjects = [
    {
      title: "Next-Generation mRNA Vaccine Development for SARS-CoV-2 Variants",
      description: "Designing and testing improved mRNA vaccines to combat emerging SARS-CoV-2 variants.",
      postedBy: "Dr. Emily Chen, Vaccine Innovation Lab, Global Health Institute",
      jobTitle: "Senior Scientist - mRNA Vaccine Development",
      summary: "This project focuses on developing next-generation mRNA vaccines that provide broader and more durable protection against current and future SARS-CoV-2 variants. We aim to optimize mRNA design, delivery systems, and immunogen engineering to enhance vaccine efficacy and reduce the need for frequent boosters. Our goal is to create a pan-coronavirus vaccine platform that can rapidly adapt to emerging threats.",
      roleDetails: [
        "Designing and synthesizing modified mRNA constructs encoding optimized SARS-CoV-2 antigens.",
        "Developing and testing novel lipid nanoparticle formulations for improved mRNA delivery and stability.",
        "Evaluating immune responses and protective efficacy of vaccine candidates in animal models.",
        "Collaborating with structural biologists to design chimeric spike proteins targeting conserved epitopes across multiple variants.",
        "Coordinating with clinical partners to plan and implement human trials for promising vaccine candidates."
      ],
      compensation: "This position offers a salary range of $100,000-$130,000 per year, depending on experience. Benefits include comprehensive health coverage, retirement plans, and opportunities for patent authorship.",
      projectTimeline: { start: "September 1, 2023", end: "August 31, 2026" },
      roleTimeline: { start: "September 1, 2023", end: "August 31, 2025" },
      qualifications: [
        "Ph.D. in Molecular Biology, Immunology, or a related field with extensive experience in vaccine development.",
        "Strong background in mRNA technology and lipid nanoparticle formulation.",
        "Experience with immunological assays and animal models of viral infections.",
        "Familiarity with regulatory requirements for vaccine development and clinical trials.",
        "Excellent project management and communication skills for coordinating multidisciplinary research teams."
      ],
      additionalInfo: "Learn more about our Vaccine Innovation Lab at www.globalhealth.org/vaccine-lab"
    },
    {
      title: "AI-Driven Drug Repurposing for COVID-19 Treatment",
      description: "Using artificial intelligence to identify existing drugs that can be repurposed for COVID-19 treatment.",
      postedBy: "Dr. Michael Zhang, AI for Health Division, Tech Innovation Institute",
      jobTitle: "Machine Learning Scientist - Drug Discovery",
      summary: "This project aims to leverage advanced AI and machine learning techniques to identify existing FDA-approved drugs that can be repurposed for treating COVID-19. We will develop and apply novel algorithms to analyze large-scale genomic, proteomic, and clinical datasets to predict drug candidates with potential efficacy against SARS-CoV-2 infection and associated complications.",
      roleDetails: [
        "Developing and implementing machine learning models for drug-target interaction prediction and drug repurposing.",
        "Analyzing multi-omics datasets to identify molecular signatures of SARS-CoV-2 infection and potential drug targets.",
        "Creating and maintaining a comprehensive database of drug-COVID-19 interactions and clinical outcomes.",
        "Collaborating with virologists and clinicians to validate AI predictions through in vitro and clinical studies.",
        "Designing user-friendly interfaces for clinicians to access and interpret AI-generated drug repurposing recommendations."
      ],
      compensation: "The salary range for this position is $110,000-$140,000 per year, commensurate with experience. Benefits include health insurance, stock options, and funding for conference attendance and continuing education in AI and drug discovery.",
      projectTimeline: { start: "January 1, 2024", end: "December 31, 2026" },
      roleTimeline: { start: "January 1, 2024", end: "December 31, 2025" },
      qualifications: [
        "Ph.D. in Computer Science, Bioinformatics, or a related field with a strong focus on AI and drug discovery.",
        "Expertise in machine learning, particularly in graph neural networks and natural language processing for biomedical applications.",
        "Strong programming skills in Python and experience with deep learning frameworks (e.g., TensorFlow, PyTorch).",
        "Familiarity with drug discovery processes and understanding of pharmacology concepts.",
        "Excellent communication skills for presenting complex AI models to diverse audiences."
      ],
      additionalInfo: "For more information about our AI for Health Division, visit www.techinnovation.org/ai-health"
    },
    {
      title: "Long COVID Pathogenesis and Biomarker Discovery",
      description: "Investigating the molecular mechanisms of Long COVID and identifying diagnostic biomarkers.",
      postedBy: "Dr. Sarah Johnson, Center for Post-Viral Syndromes, University Medical Center",
      jobTitle: "Research Scientist - Long COVID Biology",
      summary: "This project aims to elucidate the underlying mechanisms of Long COVID and identify reliable biomarkers for diagnosis and prognosis. We will conduct comprehensive multi-omics profiling of Long COVID patients to characterize persistent immune dysregulation, metabolic alterations, and organ-specific pathologies. Our goal is to develop a diagnostic panel for Long COVID and identify potential therapeutic targets to alleviate chronic symptoms.",
      roleDetails: [
        "Coordinating longitudinal sample collection and multi-omics profiling (transcriptomics, proteomics, metabolomics) of Long COVID patients.",
        "Analyzing large-scale omics datasets to identify molecular signatures associated with Long COVID phenotypes.",
        "Developing and validating diagnostic biomarker panels for Long COVID using machine learning approaches.",
        "Investigating the role of persistent viral reservoirs, autoimmunity, and chronic inflammation in Long COVID pathogenesis.",
        "Collaborating with clinicians to correlate molecular findings with clinical symptoms and outcomes."
      ],
      compensation: "This position offers a salary range of $80,000-$100,000 per year, based on experience. Benefits include comprehensive health coverage, retirement plans, and opportunities for professional development in emerging infectious diseases research.",
      projectTimeline: { start: "July 1, 2023", end: "June 30, 2026" },
      roleTimeline: { start: "July 1, 2023", end: "June 30, 2025" },
      qualifications: [
        "Ph.D. in Immunology, Molecular Biology, or a related field with a strong background in infectious diseases and chronic illnesses.",
        "Expertise in multi-omics data analysis and integration, including experience with relevant bioinformatics tools.",
        "Experience with biomarker discovery and validation in clinical settings.",
        "Familiarity with immunological and molecular biology techniques for mechanistic studies.",
        "Strong publication record and excellent written and oral communication skills."
      ],
      additionalInfo: "Learn more about our Center for Post-Viral Syndromes at www.umc.edu/post-viral-syndromes"
    },
    {
      title: "Novel Coronavirus Antivirals: Targeting the Main Protease",
      description: "Developing potent and selective inhibitors of the SARS-CoV-2 main protease (Mpro) as potential antiviral therapeutics.",
      postedBy: "Dr. Lisa Wong, Antiviral Drug Discovery Lab, Pharmaceutical Research Institute",
      jobTitle: "Medicinal Chemist - Antiviral Drug Design",
      summary: "This project focuses on the design, synthesis, and optimization of small molecule inhibitors targeting the SARS-CoV-2 main protease (Mpro), a critical enzyme for viral replication. Our goal is to develop orally bioavailable antiviral drugs with high potency and selectivity against Mpro, potentially providing a new treatment option for COVID-19 that is effective against multiple coronavirus variants.",
      roleDetails: [
        "Designing and synthesizing novel chemical scaffolds as potential Mpro inhibitors based on structural insights and computational modeling.",
        "Conducting structure-activity relationship (SAR) studies to optimize lead compounds for potency, selectivity, and drug-like properties.",
        "Collaborating with structural biologists to obtain co-crystal structures of inhibitors bound to Mpro for structure-based drug design.",
        "Working with virologists to evaluate the antiviral activity and cytotoxicity of synthesized compounds in cellular assays.",
        "Optimizing lead compounds for favorable pharmacokinetic properties and in vivo efficacy."
      ],
      compensation: "The salary range for this position is $90,000-$120,000 per year, depending on experience. Benefits include health insurance, retirement plans, and opportunities for patent authorship and royalties from successfully developed compounds.",
      projectTimeline: { start: "October 1, 2023", end: "September 30, 2026" },
      roleTimeline: { start: "October 1, 2023", end: "September 30, 2025" },
      qualifications: [
        "Ph.D. in Medicinal Chemistry, Organic Chemistry, or a related field with experience in antiviral drug discovery.",
        "Strong background in synthetic organic chemistry and structure-based drug design.",
        "Familiarity with enzymatic assays and cellular antiviral screening methods.",
        "Experience with computational chemistry tools and molecular modeling software.",
        "Excellent project management skills and a track record of successful collaborations in drug discovery projects."
      ],
      additionalInfo: "For more information about our Antiviral Drug Discovery Lab, visit www.pharmaresearch.org/antiviral-discovery"
    },
    {
      title: "SARS-CoV-2 Host-Pathogen Protein Interactome Mapping",
      description: "Comprehensive mapping of SARS-CoV-2-host protein interactions to identify novel therapeutic targets.",
      postedBy: "Dr. David Lee, Molecular Virology Department, Institute for Infectious Diseases",
      jobTitle: "Research Scientist - Viral-Host Interactions",
      summary: "This project aims to create a comprehensive map of protein-protein interactions between SARS-CoV-2 components and human host factors. By employing advanced proteomics and interactomics approaches, we seek to identify key host proteins and pathways exploited by the virus during its replication cycle. Our goal is to uncover novel therapeutic targets for antiviral development and gain insights into the molecular basis of COVID-19 pathogenesis.",
      roleDetails: [
        "Conducting large-scale affinity purification-mass spectrometry (AP-MS) experiments to identify virus-host protein interactions.",
        "Performing CRISPR screens to validate the functional relevance of identified host factors in SARS-CoV-2 replication.",
        "Developing and applying proximity labeling techniques (e.g., BioID, APEX) to capture transient and compartment-specific interactions.",
        "Integrating interactomics data with other -omics datasets to build a systems-level understanding of SARS-CoV-2 infection.",
        "Collaborating with structural biologists and medicinal chemists to characterize and target key virus-host protein interfaces."
      ],
      compensation: "This position offers a salary range of $75,000-$95,000 per year, based on experience. Benefits include health insurance, retirement plans, and funding for conference attendance and professional development.",
      projectTimeline: { start: "March 1, 2024", end: "February 28, 2027" },
      roleTimeline: { start: "March 1, 2024", end: "February 28, 2026" },
      qualifications: [
        "Ph.D. in Molecular Biology, Biochemistry, or a related field with a strong background in virology and protein-protein interactions.",
        "Expertise in proteomics techniques, including AP-MS and proximity labeling methods.",
        "Experience with CRISPR-based genetic screens and functional genomics approaches.",
        "Proficiency in bioinformatics analysis of large-scale proteomics and interactomics datasets.",
        "Strong publication record and excellent communication skills for interdisciplinary collaboration."
      ],
      additionalInfo: "Learn more about our Molecular Virology Department at www.iid.edu/molecular-virology"
    },
    {
      title: "Coronavirus Evolution and Zoonotic Potential",
      description: "Studying the evolution of coronaviruses in animal reservoirs to predict and prevent future zoonotic spillovers.",
      postedBy: "Dr. Elena Rodriguez, Emerging Viruses Research Center, One Health Institute",
      jobTitle: "Evolutionary Virologist - Zoonotic Diseases",
      summary: "This project focuses on investigating the evolution of coronaviruses in various animal reservoirs, with the aim of understanding the genetic and ecological factors that contribute to zoonotic spillover events. We will conduct extensive surveillance of coronaviruses in wildlife populations, perform phylogenetic analyses, and use machine learning approaches to predict viral strains with high zoonotic potential. Our goal is to develop early warning systems for future coronavirus pandemics.",
      roleDetails: [
        "Coordinating field studies for coronavirus surveillance in diverse animal species, focusing on bats, rodents, and other potential reservoirs.",
        "Performing next-generation sequencing and genomic analyses of novel coronaviruses isolated from animal samples.",
        "Conducting phylogenetic and evolutionary analyses to understand the relationships between animal and human coronaviruses.",
        "Developing machine learning models to predict zoonotic potential based on viral genomic features and ecological data.",
        "Collaborating with ecologists and public health officials to design strategies for monitoring and mitigating zoonotic spillover risks."
      ],
      compensation: "The salary range for this position is $80,000-$100,000 per year, commensurate with experience. Benefits include health insurance, retirement plans, and opportunities for fieldwork and international collaborations.",
      projectTimeline: { start: "August 1, 2023", end: "July 31, 2026" },
      roleTimeline: { start: "August 1, 2023", end: "July 31, 2025" },
      qualifications: [
        "Ph.D. in Virology, Evolutionary Biology, or a related field with a focus on zoonotic diseases.",
        "Strong background in genomics, phylogenetics, and bioinformatics analysis of viral sequences.",
        "Experience with field research and sample collection from wildlife populations.",
        "Proficiency in programming languages (e.g., Python, R) for data analysis and modeling.",
        "Excellent project management and communication skills for coordinating international research efforts."
      ],
      additionalInfo: "For more information about our Emerging Viruses Research Center, visit www.onehealthinstitute.org/emerging-viruses"
    },
    {
      title: "Nasal Spray Vaccine for SARS-CoV-2: Mucosal Immunity",
      description: "Developing an intranasal vaccine to induce robust mucosal immunity against SARS-CoV-2.",
      postedBy: "Dr. Maria Sanchez, Mucosal Immunology Lab, Vaccine Research Institute",
      jobTitle: "Immunologist - Mucosal Vaccines",
      summary: "This project aims to develop an intranasal vaccine for SARS-CoV-2 that induces strong mucosal immunity in the respiratory tract. We will focus on designing novel antigen formulations and adjuvants optimized for intranasal delivery to elicit both mucosal and systemic immune responses. Our goal is to create a needle-free vaccine that provides superior protection against SARS-CoV-2 infection and transmission by targeting the virus at its point of entry.",
      roleDetails: [
        "Designing and testing novel SARS-CoV-2 antigen formulations and mucosal adjuvants for intranasal delivery.",
        "Evaluating mucosal and systemic immune responses induced by intranasal vaccine candidates in animal models.",
        "Investigating the impact of intranasal vaccination on resident memory T and B cells in the respiratory tract.",
        "Developing strategies to enhance vaccine stability and shelf-life for potential use in resource-limited settings.",
        "Collaborating with industry partners to scale up production and advance promising candidates to clinical trials."
      ],
      compensation: "This position offers a salary range of $85,000-$110,000 per year, depending on experience. Benefits include health insurance, retirement contributions, and opportunities for conference travel and continuing education in vaccinology.",
      projectTimeline: { start: "October 1, 2023", end: "September 30, 2026" },
      roleTimeline: { start: "October 1, 2023", end: "September 30, 2025" },
      qualifications: [
        "Ph.D. in Immunology, Virology, or a related field with expertise in mucosal immunology and vaccine development.",
        "Strong background in formulation and delivery of biologics, particularly for intranasal administration.",
        "Experience with animal models of respiratory infections and immunological assays for assessing mucosal immunity.",
        "Familiarity with regulatory requirements for vaccine development and GMP manufacturing processes.",
        "Excellent project management skills and a track record of successful collaborations with industry partners."
      ],
      additionalInfo: "For more information about our Mucosal Immunology Lab and ongoing vaccine projects, visit www.vri.edu/mucosal-immunology"
    },
    {
      title: "SARS-CoV-2 Structural Biology: Targeting the Spike Protein",
      description: "Elucidating the structural dynamics of the SARS-CoV-2 spike protein to guide therapeutic development.",
      postedBy: "Dr. Thomas Chen, Structural Virology Unit, Institute for Molecular Medicine",
      jobTitle: "Structural Biologist - Viral Proteins",
      summary: "This project focuses on investigating the structural dynamics of the SARS-CoV-2 spike protein, including its interactions with host receptors and antibodies. We aim to use cutting-edge structural biology techniques, including cryo-EM and X-ray crystallography, to provide atomic-level insights into spike protein function, conformational changes, and vulnerability to neutralization. Our findings will guide the design of improved vaccines and therapeutic antibodies.",
      roleDetails: [
        "Expressing and purifying recombinant SARS-CoV-2 spike protein constructs for structural studies.",
        "Performing cryo-EM analysis of spike protein in various conformational states and in complex with antibodies or receptors.",
        "Conducting X-ray crystallography studies of spike protein subdomains and their interactions with potential inhibitors.",
        "Using molecular dynamics simulations to investigate spike protein dynamics and predict effects of mutations.",
        "Collaborating with immunologists and medicinal chemists to translate structural insights into improved vaccines and therapeutics."
      ],
      compensation: "The salary range for this position is $90,000-$120,000 per year, based on experience. Benefits include health insurance, retirement plans, and funding for synchrotron visits and conference attendance.",
      projectTimeline: { start: "January 1, 2024", end: "December 31, 2026" },
      roleTimeline: { start: "January 1, 2024", end: "December 31, 2025" },
      qualifications: [
        "Ph.D. in Structural Biology, Biophysics, or a related field with expertise in protein structure determination.",
        "Strong background in cryo-EM and/or X-ray crystallography techniques.",
        "Experience with recombinant protein expression and purification.",
        "Proficiency in structural biology software packages and molecular visualization tools.",
        "Excellent communication skills and ability to collaborate in a multidisciplinary research environment."
      ],
      additionalInfo: "Learn more about our Structural Virology Unit at www.imm.edu/structural-virology"
    },
    {
      title: "AI-Powered COVID-19 Diagnosis and Prognosis",
      description: "Developing machine learning models for accurate COVID-19 diagnosis and outcome prediction using multi-modal medical data.",
      postedBy: "Dr. Jennifer Lee, AI in Healthcare Lab, Medical AI Institute",
      jobTitle: "Machine Learning Scientist - Medical Diagnostics",
      summary: "This project aims to develop advanced AI algorithms for improved COVID-19 diagnosis and prognosis prediction. We will integrate multiple data modalities, including medical imaging (chest X-rays and CT scans), clinical variables, and laboratory test results, to create comprehensive models that can accurately diagnose COVID-19 and predict disease severity and outcomes. Our goal is to create AI tools that can assist healthcare providers in rapid triage and personalized patient management.",
      roleDetails: [
        "Developing deep learning models for COVID-19 detection and severity assessment from chest X-rays and CT scans.",
        "Creating multi-modal AI algorithms that integrate imaging data with clinical and laboratory variables for improved diagnosis and prognosis.",
        "Implementing natural language processing techniques to extract relevant information from clinical notes and reports.",
        "Designing and conducting retrospective and prospective studies to validate AI models in diverse patient populations.",
        "Collaborating with clinicians to develop user-friendly interfaces for AI-powered diagnostic and prognostic tools."
      ],
      compensation: "This position offers a salary range of $100,000-$130,000 per year, depending on experience. Benefits include health insurance, stock options, and opportunities for conference attendance and continuing education in AI and healthcare.",
      projectTimeline: { start: "July 1, 2023", end: "June 30, 2026" },
      roleTimeline: { start: "July 1, 2023", end: "June 30, 2025" },
      qualifications: [
        "Ph.D. in Computer Science, Biomedical Engineering, or a related field with a strong focus on machine learning and medical image analysis.",
        "Expertise in deep learning frameworks (e.g., TensorFlow, PyTorch) and experience with medical imaging datasets.",
        "Strong background in computer vision, natural language processing, and multi-modal data integration.",
        "Familiarity with healthcare data privacy regulations and experience working with clinical datasets.",
        "Excellent programming skills and experience with deploying machine learning models in clinical settings."
      ],
      additionalInfo: "For more information about our AI in Healthcare Lab, visit www.medicalai.org/healthcare-lab"
    },
    {
      title: "Coronavirus-Host Metabolic Interactions",
      description: "Investigating the metabolic interplay between SARS-CoV-2 and host cells to identify novel therapeutic targets.",
      postedBy: "Dr. Rachel Green, Metabolic Virology Department, Center for Infectious Disease Research",
      jobTitle: "Research Scientist - Viral Metabolism",
      summary: "This project focuses on elucidating the metabolic interactions between SARS-CoV-2 and host cells during infection. We aim to identify key metabolic pathways and enzymes that are critical for viral replication and may serve as potential therapeutic targets. Our research will combine metabolomics profiling, stable isotope tracing, and functional genomics to provide a comprehensive understanding of virus-induced metabolic reprogramming in host cells.",
      roleDetails: [
        "Conducting metabolomics profiling of SARS-CoV-2 infected cells to identify altered metabolic pathways.",
        "Performing stable isotope tracing experiments to elucidate virus-induced changes in metabolic flux.",
        "Using CRISPR screens to identify host metabolic genes essential for SARS-CoV-2 replication.",
        "Investigating the impact of metabolic inhibitors on viral replication and host cell function.",
        "Collaborating with structural biologists and medicinal chemists to develop inhibitors targeting key metabolic enzymes."
      ],
      compensation: "The salary range for this position is $80,000-$100,000 per year, commensurate with experience. Benefits include health insurance, retirement plans, and opportunities for professional development in metabolomics and virology.",
      projectTimeline: { start: "November 1, 2023", end: "October 31, 2026" },
      roleTimeline: { start: "November 1, 2023", end: "October 31, 2025" },
      qualifications: [
        "Ph.D. in Biochemistry, Molecular Biology, or a related field with a strong background in metabolism and virology.",
        "Expertise in metabolomics techniques and analysis of metabolic flux data.",
        "Experience with CRISPR-based genetic screens and functional genomics approaches.",
        "Familiarity with bioinformatics tools for analyzing large-scale omics datasets.",
        "Strong publication record and excellent communication skills for interdisciplinary collaboration."
      ],
      additionalInfo: "Learn more about our Metabolic Virology Department at www.cidr.edu/metabolic-virology"
    },
    {
      title: "SARS-CoV-2 Transmission Dynamics and Environmental Factors",
      description: "Investigating the impact of environmental factors on SARS-CoV-2 transmission to improve epidemic forecasting.",
      postedBy: "Dr. Michael Thompson, Environmental Health and Epidemiology Center, Public Health Institute",
      jobTitle: "Epidemiologist - Respiratory Virus Transmission",
      summary: "This project focuses on elucidating the complex relationships between environmental factors and SARS-CoV-2 transmission dynamics. We aim to integrate meteorological data, air quality measurements, and population mobility patterns with COVID-19 surveillance data to develop more accurate models for predicting virus spread. Our goal is to enhance epidemic forecasting capabilities and inform targeted public health interventions.",
      roleDetails: [
        "Analyzing large-scale epidemiological datasets in conjunction with environmental and climate data to identify factors influencing SARS-CoV-2 transmission.",
        "Developing and validating mathematical models to predict COVID-19 spread based on environmental variables and population dynamics.",
        "Conducting field studies to collect data on local environmental conditions and their association with COVID-19 incidence.",
        "Collaborating with climate scientists and environmental health experts to assess the impact of long-term climate changes on coronavirus epidemiology.",
        "Working with public health officials to translate research findings into actionable recommendations for COVID-19 prevention and control."
      ],
      compensation: "This position offers a salary range of $75,000-$95,000 per year, based on experience. Benefits include health insurance, retirement plans, and opportunities for fieldwork and conference travel.",
      projectTimeline: { start: "March 1, 2024", end: "February 28, 2027" },
      roleTimeline: { start: "March 1, 2024", end: "February 28, 2026" },
      qualifications: [
        "Ph.D. in Epidemiology, Environmental Health, or a related field with a focus on infectious disease transmission.",
        "Strong background in statistical analysis and experience with epidemiological modeling techniques.",
        "Proficiency in programming languages such as R or Python for data analysis and visualization.",
        "Familiarity with GIS tools and experience working with spatial data.",
        "Excellent project management and communication skills for coordinating multi-disciplinary research teams and engaging with public health stakeholders."
      ],
      additionalInfo: "For more information about our Environmental Health and Epidemiology Center, visit www.publichealthinstitute.org/env-health-epi"
    },
    {
      title: "Coronavirus Genomic Surveillance and Variant Tracking",
      description: "Establishing a global genomic surveillance network to monitor SARS-CoV-2 evolution and emerging variants.",
      postedBy: "Dr. Sarah Martinez, Viral Genomics and Evolution Lab, Global Pathogen Institute",
      jobTitle: "Genomic Epidemiologist - Viral Surveillance",
      summary: "This project aims to create a comprehensive global genomic surveillance system for SARS-CoV-2 to track the emergence and spread of new variants. We will develop high-throughput sequencing protocols, build bioinformatics pipelines for variant calling and phylogenetic analysis, and create user-friendly data visualization tools. Our goal is to provide real-time insights into viral evolution and inform public health responses to emerging variants of concern.",
      roleDetails: [
        "Optimizing high-throughput sequencing protocols for SARS-CoV-2 genome analysis from clinical samples.",
        "Developing and maintaining bioinformatics pipelines for variant calling, lineage assignment, and phylogenetic analysis.",
        "Creating interactive data visualization tools to track the global distribution and evolution of SARS-CoV-2 variants.",
        "Collaborating with public health agencies worldwide to establish a network for rapid data sharing and analysis.",
        "Conducting phylodynamic analyses to understand the transmission dynamics and evolutionary patterns of emerging variants."
      ],
      compensation: "The salary range for this position is $85,000-$110,000 per year, commensurate with experience. Benefits include health insurance, retirement plans, and opportunities for international collaborations and conference travel.",
      projectTimeline: { start: "September 1, 2023", end: "August 31, 2026" },
      roleTimeline: { start: "September 1, 2023", end: "August 31, 2025" },
      qualifications: [
        "Ph.D. in Genomics, Bioinformatics, or a related field with a strong background in viral evolution and epidemiology.",
        "Expertise in next-generation sequencing technologies and bioinformatics analysis of viral genomes.",
        "Proficiency in programming languages (e.g., Python, R) for developing analysis pipelines and data visualization tools.",
        "Experience with phylogenetic analysis and familiarity with tools like BEAST, NextStrain, or similar platforms.",
        "Excellent communication skills and ability to collaborate in an international, multidisciplinary environment."
      ],
      additionalInfo: "Learn more about our Viral Genomics and Evolution Lab at www.globalpathogen.org/viral-genomics"
    },
    {
      title: "Coronavirus-Induced Neurological Complications",
      description: "Investigating the mechanisms of SARS-CoV-2 neuroinvasion and associated neurological sequelae.",
      postedBy: "Dr. Emily Chen, Neuroimmunology Research Center, Brain Sciences Institute",
      jobTitle: "Neurovirologist - COVID-19 Neurobiology",
      summary: "This project focuses on understanding the neurological complications associated with SARS-CoV-2 infection. We aim to elucidate the mechanisms of viral neuroinvasion, investigate the neuroimmune responses to infection, and characterize the long-term neurological sequelae of COVID-19. Our research will combine in vitro models, animal studies, and clinical sample analysis to provide comprehensive insights into the neurobiological impacts of SARS-CoV-2.",
      roleDetails: [
        "Developing and characterizing in vitro models of the blood-brain barrier and neural organoids for studying SARS-CoV-2 neuroinvasion.",
        "Investigating the mechanisms of SARS-CoV-2 entry into neural cells and its impact on neuronal function and survival.",
        "Analyzing neuroimmune responses to SARS-CoV-2 infection in animal models and patient samples, focusing on neuroinflammation and autoimmune phenomena.",
        "Conducting longitudinal studies to characterize long-term neurological and cognitive effects in COVID-19 survivors.",
        "Collaborating with neurologists and immunologists to develop potential neuroprotective strategies for COVID-19 patients."
      ],
      compensation: "This position offers a salary range of $85,000-$105,000 per year, based on experience. Benefits include comprehensive health coverage, retirement plans, and opportunities for professional development in neuroimmunology and virology.",
      projectTimeline: { start: "January 1, 2024", end: "December 31, 2027" },
      roleTimeline: { start: "January 1, 2024", end: "December 31, 2025" },
      qualifications: [
        "Ph.D. in Neuroscience, Virology, or a related field with a strong background in neuroimmunology.",
        "Experience with in vitro neural cell culture systems, including organoids and blood-brain barrier models.",
        "Expertise in immunological techniques and familiarity with animal models of neurological diseases.",
        "Proficiency in advanced microscopy and image analysis techniques.",
        "Strong publication record and excellent communication skills for interdisciplinary collaboration."
      ],
      additionalInfo: "For more information about our Neuroimmunology Research Center, visit www.brainsciences.edu/neuroimmunology"
    },
    {
      title: "Coronavirus Structural Biology: Non-Structural Proteins",
      description: "Elucidating the structures and functions of SARS-CoV-2 non-structural proteins (NSPs) to guide antiviral drug development.",
      postedBy: "Dr. Robert Kim, Structural Virology Unit, Institute for Molecular Medicine",
      jobTitle: "Structural Biologist - Viral Proteins",
      summary: "This project aims to determine the high-resolution structures of SARS-CoV-2 non-structural proteins (NSPs) and elucidate their functions in viral replication. We will use a combination of X-ray crystallography, cryo-EM, and biophysical techniques to characterize these proteins and their interactions with potential inhibitors. Our goal is to provide structural insights that will guide the development of novel antiviral drugs targeting critical viral enzymes.",
      roleDetails: [
        "Expressing, purifying, and crystallizing SARS-CoV-2 non-structural proteins for structural studies.",
        "Performing X-ray crystallography and cryo-EM analysis of NSPs in apo forms and in complex with substrates or inhibitors.",
        "Conducting biochemical and biophysical assays to characterize the functions and interactions of NSPs.",
        "Using structure-based drug design approaches to identify and optimize potential inhibitors of viral enzymes.",
        "Collaborating with medicinal chemists and virologists to validate structural findings and guide antiviral drug development."
      ],
      compensation: "The salary range for this position is $90,000-$120,000 per year, commensurate with experience. Benefits include health insurance, retirement plans, and funding for synchrotron visits and conference attendance.",
      projectTimeline: { start: "July 1, 2023", end: "June 30, 2026" },
      roleTimeline: { start: "July 1, 2023", end: "June 30, 2025" },
      qualifications: [
        "Ph.D. in Structural Biology, Biochemistry, or a related field with expertise in protein structure determination.",
        "Strong background in X-ray crystallography and/or cryo-EM techniques.",
        "Experience with recombinant protein expression, purification, and characterization.",
        "Proficiency in structural biology software packages and molecular visualization tools.",
        "Excellent communication skills and ability to collaborate in a multidisciplinary research environment."
      ],
      additionalInfo: "Learn more about our Structural Virology Unit at www.imm.edu/structural-virology"
    }
  ];
  
 const measlesProjects = [
    {
      title: "Next-Generation Measles Vaccine Development",
      description: "Designing and testing novel measles vaccines with improved stability and immunogenicity.",
      postedBy: "Dr. Amanda Chen, Vaccine Innovation Lab, Global Health Institute",
      jobTitle: "Senior Scientist - Vaccine Development",
      summary: "This project aims to develop next-generation measles vaccines with enhanced stability, immunogenicity, and ease of administration. We will focus on novel antigen design, innovative adjuvant formulations, and alternative delivery methods to create vaccines that can overcome current challenges in global measles elimination efforts. Our goal is to produce a vaccine candidate that offers longer-lasting immunity, requires no cold chain, and can be administered through needle-free methods.",
      roleDetails: [
        "Designing and engineering novel measles virus antigens with improved stability and immunogenicity.",
        "Developing and testing new adjuvant formulations to enhance vaccine efficacy.",
        "Exploring alternative delivery methods, including microneedle patches and oral formulations.",
        "Evaluating immune responses and protective efficacy of vaccine candidates in animal models.",
        "Collaborating with partners to plan and implement early-phase clinical trials for promising candidates."
      ],
      compensation: "This position offers a salary range of $90,000-$120,000 per year, depending on experience. Benefits include comprehensive health coverage, retirement plans, and opportunities for conference travel and professional development.",
      projectTimeline: { start: "September 1, 2023", end: "August 31, 2026" },
      roleTimeline: { start: "September 1, 2023", end: "August 31, 2025" },
      qualifications: [
        "Ph.D. in Immunology, Virology, or a related field with extensive experience in vaccine development.",
        "Strong background in molecular biology techniques and immunological assays.",
        "Experience with animal models of viral infections and vaccine evaluation.",
        "Familiarity with regulatory requirements for vaccine development and clinical trials.",
        "Excellent project management and communication skills for coordinating multidisciplinary research teams."
      ],
      additionalInfo: "Learn more about our Vaccine Innovation Lab at www.globalhealth.org/vaccine-lab"
    },
    {
      title: "Measles Virus Evolution and Antigenic Drift",
      description: "Investigating the molecular evolution of measles virus and its impact on vaccine efficacy.",
      postedBy: "Dr. Michael Wong, Viral Evolution Research Center, University Institute of Virology",
      jobTitle: "Evolutionary Virologist - Measles",
      summary: "This project focuses on studying the molecular evolution of measles virus strains circulating globally and assessing the potential for antigenic drift. We aim to analyze genomic and antigenic data from diverse measles isolates to understand evolutionary patterns, identify emerging variants, and evaluate their impact on current vaccine efficacy. Our research will inform strategies for long-term measles control and vaccine updates if necessary.",
      roleDetails: [
        "Conducting whole-genome sequencing of measles virus isolates from various geographical regions.",
        "Performing phylogenetic analyses to track the global spread and evolution of measles virus lineages.",
        "Investigating the molecular basis of antigenic variation through structural and functional studies of the measles virus hemagglutinin and fusion proteins.",
        "Evaluating the neutralizing capacity of vaccine-induced antibodies against diverse measles virus strains.",
        "Collaborating with public health agencies to integrate research findings into measles surveillance and control strategies."
      ],
      compensation: "The salary range for this position is $80,000-$100,000 per year, commensurate with experience. Benefits include health insurance, retirement plans, and funding for conference attendance and international collaborations.",
      projectTimeline: { start: "January 1, 2024", end: "December 31, 2026" },
      roleTimeline: { start: "January 1, 2024", end: "December 31, 2025" },
      qualifications: [
        "Ph.D. in Virology, Molecular Biology, or a related field with a strong background in viral evolution.",
        "Expertise in genomic sequencing, phylogenetic analysis, and bioinformatics.",
        "Experience with molecular virology techniques and cell culture-based viral assays.",
        "Familiarity with structural biology concepts and immunological methods.",
        "Excellent analytical skills and proficiency in programming languages (e.g., Python, R) for data analysis."
      ],
      additionalInfo: "For more information about our Viral Evolution Research Center, visit www.uiv.edu/viral-evolution"
    },
    {
      title: "Host Immune Responses to Measles Virus Infection",
      description: "Characterizing the innate and adaptive immune responses to measles virus for improved therapeutics and vaccines.",
      postedBy: "Dr. Sarah Johnson, Viral Immunology Department, Medical Research Institute",
      jobTitle: "Immunologist - Viral Infections",
      summary: "This project aims to elucidate the complex interactions between measles virus and the host immune system. We will investigate both innate and adaptive immune responses to measles infection, with a focus on understanding the mechanisms of immune suppression and long-term immunity. Our goal is to identify key immunological pathways that can be targeted for therapeutic interventions and to inform the development of more effective vaccines.",
      roleDetails: [
        "Characterizing the innate immune responses to measles virus infection in primary human cells and animal models.",
        "Investigating the mechanisms of measles virus-induced immunosuppression, focusing on interactions with dendritic cells and T cells.",
        "Analyzing the development and maintenance of long-term B and T cell memory responses following measles vaccination and natural infection.",
        "Exploring the potential of immunomodulatory therapies to enhance antiviral responses and mitigate complications of measles infection.",
        "Collaborating with clinicians to study immune responses in vaccinated individuals and measles patients."
      ],
      compensation: "This position offers a salary range of $75,000-$95,000 per year, based on experience. Benefits include comprehensive health coverage, retirement plans, and opportunities for professional development in immunology.",
      projectTimeline: { start: "July 1, 2023", end: "June 30, 2026" },
      roleTimeline: { start: "July 1, 2023", end: "June 30, 2025" },
      qualifications: [
        "Ph.D. in Immunology, Virology, or a related field with a strong background in viral immunology.",
        "Expertise in cellular and molecular immunology techniques, including multi-parameter flow cytometry and immunological assays.",
        "Experience with primary human cell culture and animal models of viral infections.",
        "Familiarity with systems immunology approaches and bioinformatics analysis of immunological data.",
        "Strong publication record and excellent written and oral communication skills."
      ],
      additionalInfo: "Learn more about our Viral Immunology Department at www.mri.edu/viral-immunology"
    },
    {
      title: "Measles Virus Neuroinvasion and CNS Complications",
      description: "Investigating the mechanisms of measles virus neuroinvasion and associated neurological sequelae.",
      postedBy: "Dr. Elena Rodriguez, Neurovirology Lab, Brain Research Center",
      jobTitle: "Neurovirologist - Measles",
      summary: "This project focuses on understanding the neurological complications associated with measles virus infection. We aim to elucidate the mechanisms of viral neuroinvasion, characterize the neuroimmune responses to infection, and investigate the pathogenesis of measles-induced encephalitis and other CNS disorders. Our research will combine in vitro neural models, animal studies, and analysis of clinical samples to provide comprehensive insights into measles virus neuropathology.",
      roleDetails: [
        "Developing and characterizing in vitro models of the blood-brain barrier and neural organoids for studying measles virus neuroinvasion.",
        "Investigating the mechanisms of measles virus entry into neural cells and its impact on neuronal function and survival.",
        "Analyzing neuroimmune responses to measles virus infection in animal models and patient samples, focusing on neuroinflammation and demyelination.",
        "Characterizing the molecular basis of measles virus persistence in the CNS and its role in long-term neurological sequelae.",
        "Collaborating with neurologists to develop potential neuroprotective strategies for patients with measles-associated neurological complications."
      ],
      compensation: "The salary range for this position is $85,000-$105,000 per year, commensurate with experience. Benefits include health insurance, retirement plans, and opportunities for conference travel and continuing education in neuroimmunology.",
      projectTimeline: { start: "October 1, 2023", end: "September 30, 2026" },
      roleTimeline: { start: "October 1, 2023", end: "September 30, 2025" },
      qualifications: [
        "Ph.D. in Neuroscience, Virology, or a related field with a strong background in neuroimmunology.",
        "Experience with in vitro neural cell culture systems, including organoids and blood-brain barrier models.",
        "Expertise in virology techniques and familiarity with animal models of viral encephalitis.",
        "Proficiency in advanced microscopy and image analysis techniques.",
        "Strong publication record and excellent communication skills for interdisciplinary collaboration."
      ],
      additionalInfo: "For more information about our Neurovirology Lab, visit www.brainrc.org/neurovirology"
    },
    {
      title: "Point-of-Care Diagnostics for Measles in Resource-Limited Settings",
      description: "Developing rapid, accurate, and affordable diagnostic tools for measles detection in low-resource environments.",
      postedBy: "Dr. David Lee, Global Diagnostics Initiative, International Health Technologies",
      jobTitle: "Biomedical Engineer - Diagnostic Development",
      summary: "This project aims to create innovative point-of-care diagnostic tools for rapid and accurate detection of measles virus in resource-limited settings. We will focus on developing low-cost, easy-to-use devices that can provide reliable results without the need for sophisticated laboratory equipment. Our goal is to enhance measles surveillance and outbreak response capabilities in underserved regions, contributing to global measles elimination efforts.",
      roleDetails: [
        "Designing and prototyping novel lateral flow assays and microfluidic devices for measles virus detection.",
        "Developing and optimizing isothermal amplification methods for measles virus RNA detection in field conditions.",
        "Evaluating the performance of diagnostic tools using clinical samples and assessing their suitability for use in challenging environments.",
        "Collaborating with global health organizations to field-test diagnostic devices in resource-limited settings.",
        "Working with manufacturing partners to scale up production of successful diagnostic tools for widespread deployment."
      ],
      compensation: "This position offers a salary range of $80,000-$100,000 per year, based on experience. Benefits include health insurance, retirement contributions, and opportunities for international travel and fieldwork.",
      projectTimeline: { start: "March 1, 2024", end: "February 28, 2027" },
      roleTimeline: { start: "March 1, 2024", end: "February 28, 2026" },
      qualifications: [
        "Ph.D. in Biomedical Engineering, Biotechnology, or a related field with expertise in diagnostic device development.",
        "Strong background in molecular biology techniques and immunoassay development.",
        "Experience with microfluidics and point-of-care diagnostic technologies.",
        "Familiarity with regulatory requirements for medical diagnostic devices.",
        "Excellent problem-solving skills and ability to work in resource-constrained environments."
      ],
      additionalInfo: "Learn more about our Global Diagnostics Initiative at www.iht.org/global-diagnostics"
    }
  ];
  
const sickleCellProjects = [
    {
      title: "CRISPR-Based Gene Therapy for Sickle Cell Disease",
      description: "Developing a novel CRISPR/Cas9 gene editing approach to correct the sickle cell mutation in hematopoietic stem cells.",
      postedBy: "Dr. Maria Rodriguez, Gene Therapy Center, Advanced Medical Institute",
      jobTitle: "Senior Scientist - Gene Editing",
      summary: "This project aims to develop an innovative CRISPR/Cas9-based gene therapy for sickle cell disease. We will focus on optimizing gene editing strategies to correct the sickle cell mutation in patient-derived hematopoietic stem and progenitor cells (HSPCs). Our goal is to create a safe and effective autologous stem cell therapy that can provide a long-term cure for sickle cell patients.",
      roleDetails: [
        "Designing and testing CRISPR/Cas9 guide RNAs for efficient and specific targeting of the β-globin gene.",
        "Optimizing gene editing protocols in human hematopoietic stem and progenitor cells (HSPCs).",
        "Evaluating the efficiency and safety of gene correction using next-generation sequencing and functional assays.",
        "Developing strategies to enhance engraftment of gene-corrected HSPCs in animal models.",
        "Collaborating with clinicians to design protocols for future clinical trials of the gene therapy approach."
      ],
      compensation: "This position offers a salary range of $90,000-$120,000 per year, depending on experience. Benefits include comprehensive health coverage, retirement plans, and opportunities for patent authorship.",
      projectTimeline: { start: "September 1, 2023", end: "August 31, 2026" },
      roleTimeline: { start: "September 1, 2023", end: "August 31, 2025" },
      qualifications: [
        "Ph.D. in Molecular Biology, Genetics, or a related field with extensive experience in gene editing technologies.",
        "Strong background in hematopoietic stem cell biology and ex vivo cell manipulation techniques.",
        "Expertise in CRISPR/Cas9 gene editing, including design of guide RNAs and assessment of off-target effects.",
        "Experience with next-generation sequencing and analysis of genomic data.",
        "Excellent project management and communication skills for coordinating complex research projects."
      ],
      additionalInfo: "Learn more about our Gene Therapy Center at www.ami.edu/gene-therapy-center"
    },
    {
      title: "Novel Small Molecule Therapies for Sickle Cell Disease",
      description: "Identifying and developing small molecule drugs to reduce sickling and improve red blood cell function in sickle cell disease.",
      postedBy: "Dr. James Chen, Drug Discovery Unit, Hematology Research Institute",
      jobTitle: "Medicinal Chemist - Hematological Disorders",
      summary: "This project focuses on discovering and optimizing small molecule therapeutics for sickle cell disease. We aim to identify compounds that can reduce hemoglobin S polymerization, improve red blood cell hydration, or modulate other pathways involved in sickle cell pathophysiology. Our goal is to develop orally available drugs that can significantly improve the quality of life for sickle cell patients.",
      roleDetails: [
        "Designing and synthesizing libraries of small molecules targeting key pathways in sickle cell disease pathophysiology.",
        "Conducting structure-activity relationship (SAR) studies to optimize lead compounds for potency and drug-like properties.",
        "Collaborating with biologists to evaluate the efficacy of compounds in cellular and animal models of sickle cell disease.",
        "Performing in silico modeling and molecular docking studies to guide rational drug design efforts.",
        "Working with ADME specialists to assess and optimize the pharmacokinetic properties of promising drug candidates."
      ],
      compensation: "The salary range for this position is $85,000-$110,000 per year, based on experience. Benefits include health insurance, retirement plans, and opportunities for patent authorship and royalties from successfully developed compounds.",
      projectTimeline: { start: "January 1, 2024", end: "December 31, 2026" },
      roleTimeline: { start: "January 1, 2024", end: "December 31, 2025" },
      qualifications: [
        "Ph.D. in Medicinal Chemistry, Organic Chemistry, or a related field with experience in drug discovery for hematological disorders.",
        "Strong background in synthetic organic chemistry and structure-based drug design.",
        "Familiarity with high-throughput screening techniques and lead optimization processes.",
        "Experience with computational chemistry tools and molecular modeling software.",
        "Excellent project management skills and a track record of successful collaborations with biologists and pharmacologists."
      ],
      additionalInfo: "For more information about our Drug Discovery Unit, visit www.hri.org/drug-discovery"
    },
    {
      title: "Induced Pluripotent Stem Cell Models for Sickle Cell Disease",
      description: "Developing and characterizing iPSC-derived erythroid models to study sickle cell disease mechanisms and test novel therapies.",
      postedBy: "Dr. Sarah Thompson, Stem Cell Biology Department, Regenerative Medicine Institute",
      jobTitle: "Research Scientist - iPSC Technology",
      summary: "This project aims to create advanced induced pluripotent stem cell (iPSC) models of sickle cell disease for disease modeling and drug screening. We will generate iPSCs from sickle cell patients, differentiate them into erythroid lineages, and use these models to study disease mechanisms and evaluate potential therapeutic approaches. Our goal is to establish a robust platform for preclinical testing of sickle cell therapies.",
      roleDetails: [
        "Generating and characterizing iPSCs from sickle cell patients and healthy controls.",
        "Optimizing protocols for efficient differentiation of iPSCs into erythroid lineages.",
        "Developing 3D culture systems and microfluidic devices to model sickle cell vaso-occlusion.",
        "Using iPSC-derived erythroid models to study the molecular mechanisms of sickle cell disease.",
        "Collaborating with drug discovery teams to establish high-throughput screening assays using iPSC-derived cells."
      ],
      compensation: "This position offers a salary range of $75,000-$95,000 per year, depending on experience. Benefits include comprehensive health coverage, retirement plans, and opportunities for conference travel and professional development.",
      projectTimeline: { start: "July 1, 2023", end: "June 30, 2026" },
      roleTimeline: { start: "July 1, 2023", end: "June 30, 2025" },
      qualifications: [
        "Ph.D. in Stem Cell Biology, Molecular Biology, or a related field with expertise in iPSC technology.",
        "Strong background in hematopoietic differentiation and erythroid biology.",
        "Experience with gene editing techniques (e.g., CRISPR/Cas9) in iPSCs.",
        "Familiarity with 3D culture systems and microfluidic devices for disease modeling.",
        "Excellent communication skills and ability to collaborate in a multidisciplinary research environment."
      ],
      additionalInfo: "Learn more about our Stem Cell Biology Department at www.rmi.edu/stem-cell-biology"
    },
    {
      title: "Targeting Inflammation and Vascular Dysfunction in Sickle Cell Disease",
      description: "Investigating novel approaches to mitigate inflammation and vascular complications in sickle cell disease.",
      postedBy: "Dr. Emily Wong, Vascular Biology Lab, Cardiovascular Research Center",
      jobTitle: "Vascular Biologist - Hematological Disorders",
      summary: "This project focuses on understanding and targeting the inflammatory and vascular components of sickle cell disease pathophysiology. We aim to identify key molecular pathways involved in vaso-occlusion, endothelial dysfunction, and chronic inflammation in sickle cell disease. Our goal is to develop new therapeutic strategies to prevent or reduce the severity of sickle cell-related vascular complications.",
      roleDetails: [
        "Investigating the mechanisms of endothelial activation and dysfunction in sickle cell disease using in vitro and in vivo models.",
        "Characterizing the role of neutrophil extracellular traps (NETs) and other inflammatory mediators in vaso-occlusive crises.",
        "Developing and testing novel anti-inflammatory and vascular-protective agents in preclinical models of sickle cell disease.",
        "Exploring the potential of targeting adhesion molecules to prevent vaso-occlusion.",
        "Collaborating with clinicians to translate preclinical findings into potential therapeutic interventions."
      ],
      compensation: "The salary range for this position is $80,000-$100,000 per year, commensurate with experience. Benefits include health insurance, retirement plans, and funding for conference attendance and continuing education in vascular biology.",
      projectTimeline: { start: "October 1, 2023", end: "September 30, 2026" },
      roleTimeline: { start: "October 1, 2023", end: "September 30, 2025" },
      qualifications: [
        "Ph.D. in Vascular Biology, Immunology, or a related field with a strong background in hematological disorders.",
        "Expertise in endothelial cell biology and techniques for studying vascular function.",
        "Experience with animal models of vascular disease and in vivo imaging techniques.",
        "Familiarity with flow cytometry and other immunological assays.",
        "Strong publication record and excellent written and oral communication skills."
      ],
      additionalInfo: "For more information about our Vascular Biology Lab, visit www.crc.edu/vascular-biology"
    },
    {
      title: "Fetal Hemoglobin Induction for Sickle Cell Disease Treatment",
      description: "Exploring novel approaches to induce fetal hemoglobin production as a therapeutic strategy for sickle cell disease.",
      postedBy: "Dr. Michael Lee, Hemoglobin Research Unit, Blood Disorders Institute",
      jobTitle: "Molecular Hematologist - Hemoglobin Disorders",
      summary: "This project aims to develop innovative strategies to reactivate fetal hemoglobin (HbF) production in adult red blood cells as a treatment for sickle cell disease. We will investigate epigenetic modifiers, transcription factors, and small molecules that can enhance γ-globin expression and HbF production. Our goal is to identify novel therapeutic targets and develop compounds that can significantly increase HbF levels in sickle cell patients.",
      roleDetails: [
        "Screening small molecule libraries to identify compounds that induce fetal hemoglobin production in erythroid cells.",
        "Investigating the molecular mechanisms of γ-globin gene regulation and fetal hemoglobin switching.",
        "Developing CRISPR/Cas9-based approaches to modulate regulatory elements controlling fetal hemoglobin expression.",
        "Evaluating the efficacy of HbF-inducing agents in patient-derived cells and animal models of sickle cell disease.",
        "Collaborating with medicinal chemists to optimize lead compounds for potency and drug-like properties."
      ],
      compensation: "This position offers a salary range of $85,000-$110,000 per year, based on experience. Benefits include comprehensive health coverage, retirement plans, and opportunities for patent authorship and conference travel.",
      projectTimeline: { start: "March 1, 2024", end: "February 28, 2027" },
      roleTimeline: { start: "March 1, 2024", end: "February 29, 2026" },
      qualifications: [
        "Ph.D. in Molecular Biology, Hematology, or a related field with expertise in hemoglobin disorders.",
        "Strong background in gene regulation and epigenetics, particularly in the context of globin gene expression.",
        "Experience with CRISPR/Cas9 gene editing and small molecule screening techniques.",
        "Familiarity with erythroid cell culture systems and animal models of hemoglobinopathies.",
        "Excellent analytical skills and proficiency in molecular biology techniques."
      ],
      additionalInfo: "Learn more about our Hemoglobin Research Unit at www.bdi.org/hemoglobin-research"
    },
    {
      title: "Pain Management and Quality of Life in Sickle Cell Disease",
      description: "Developing and evaluating novel interventions to improve pain management and quality of life for sickle cell patients.",
      postedBy: "Dr. Lisa Johnson, Pain Research Center, Comprehensive Sickle Cell Program",
      jobTitle: "Clinical Researcher - Sickle Cell Pain Management",
      summary: "This project focuses on developing and testing innovative approaches to manage chronic and acute pain in sickle cell disease patients. We aim to combine pharmacological and non-pharmacological interventions to create personalized pain management strategies. Our goal is to significantly improve the quality of life for sickle cell patients by reducing pain burden and opioid dependence while enhancing overall well-being.",
      roleDetails: [
        "Designing and conducting clinical trials to evaluate novel pain management interventions for sickle cell patients.",
        "Developing and validating patient-reported outcome measures specific to sickle cell pain and quality of life.",
        "Investigating the potential of digital health technologies and mobile apps for pain monitoring and management.",
        "Exploring the efficacy of complementary and alternative medicine approaches in sickle cell pain management.",
        "Collaborating with psychologists and social workers to address the psychosocial aspects of chronic pain in sickle cell disease."
      ],
      compensation: "The salary range for this position is $75,000-$95,000 per year, commensurate with experience. Benefits include health insurance, retirement plans, and funding for conference attendance and continuing education in pain management.",
      projectTimeline: { start: "August 1, 2023", end: "July 31, 2026" },
      roleTimeline: { start: "August 1, 2023", end: "July 31, 2025" },
      qualifications: [
        "Ph.D. or M.D. in Clinical Research, Pain Medicine, or a related field with experience in sickle cell disease management.",
        "Strong background in clinical trial design and implementation, particularly in pain management studies.",
        "Expertise in patient-reported outcome measure development and validation.",
        "Familiarity with digital health technologies and their application in chronic disease management.",
        "Excellent interpersonal skills and ability to work with diverse patient populations and multidisciplinary teams."
      ],
      additionalInfo: "For more information about our Comprehensive Sickle Cell Program, visit www.cscp.edu/sickle-cell-program"
    }
  ];

  export {
    exampleProjects,
    cancerProjects,
    influenzaProjects,
    coronavirusProjects,
    measlesProjects,
    sickleCellProjects
  };