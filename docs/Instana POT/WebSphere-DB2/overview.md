---
sidebar_position: 1
---

# Overview

## Introduction

In this Instana portion of the AIOps POT lab, you will be going through several
key exercises in order to learn more about how Instana monitors middleware applications.
The lab should be executed in the numbered order that you see on the left side of the screen. 
Some of the sections have dependencies on the previous section.

- First, you will be learning how to install the Instana agent on the Virtual Machine that includes the WebSphere Application and DB2 Database.
- Then, you will learn how to update the agent configuration file to include the infrastucture Zone and verify it is showing the the Instana application.
- Next, you will learn how to setup the Monitoring sensors for **IBM DB2** and
  **IBM WebSphere Application Server \(WAS\)**
- Once you have the applications instrumented with Instana sensors, you will go
  through a series of exercises to explore Instana's capabilities
- Finally, you will learn how to use some of Instana's Administrative
  capabilities.

## Architecture


![WebSphere_DB2_Arch](images/WebSphere-DB2-Arch.png)


## Connecting to the Lab Environment

After you request Instana PoT environment from Techzone, you will see all the components/VMs mentioned in the architecture as part of the lab environment setup. Here are the steps to get you started.

1. Click on the link under **Bastion Remote Desktop**

![Lab_Env_Bastion_Host](images/lab_env_bastion_host.png)

![Lab_Env_All_VMs](images/lab_env_all_VMs.png)

2. You will see **Recent Connections** window. Expand the **OCP Gym** and click on the first link for **Remote Desktop** connection

![Lab_Env_Bastion_Host_Recent_Conections](images/lab_env_bastion_host_recent_conections.png)

3. Now you will be taken to a bastion host remot desktop. Click on the **Activities**

![Lab_Env_Bastion_Host_Recent_Conections](images/lab_env_activities_menu.png)

4. Next, click on **Firefox** and **Terminal** window from the **Activities** menu

![Lab_Env_Bastion_Host_Recent_Conections](images/lab_env_menu.png)

5. You are all set to follow the lab instructions! 