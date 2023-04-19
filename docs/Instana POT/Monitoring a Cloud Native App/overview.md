---
sidebar_position: 1
---

# Overview

## Introduction


In this lab, you will be going through several key exercises to learn more about setting up Instana and using it to monitor a Cloud Native Application deployed for your convenience. Some of the sections have dependencies on the previous section. Executing the lab in the numbered order on the screen's left side is highly recommended.

Please review the Architecture (below) to understand the environment before proceeding with the actual lab.

- First, you will learn how to Install the Instana Agent into a variety of environments (Kubernetes, Docker, and Linux server)

- You will next learn how to navigate the Instana UI and get familiar with the Instana interface, including reviewing the different monitoring sensors.

- Once you are familiar with the application, you will define an "Application Perspective" (i.e., learn how to group your application components)

- Once you have the applications instrumented with Instana sensors, you will go through a series of troubleshooting use cases to explore Instana's capabilities.

## Architecture

This PoT environment consists of several VMs and Kubernetes clusters which host Cloud Native (microservice) applications, load generators (to provide a constant data stream), and middleware components. Three separate demo applications are listed below:

- **Robotshop** - is the traditional demo application for Intstana. Created before the IBM acquisition as a polyglot application (multiple languages and technologies), it shows off most of Instana's features. https://github.com/instana/robot-shop.
- **Quote of the Day** - is an application created by the IBM Americas Center of Competency (CoC) specifically for AI Manager and Log anomaly detection. It is actively maintained and extended to show off specific Instana features. While less comprehensive than RobotShop regarding Instana features, it is a close second. https://gitlab.com/quote-of-the-day
- **Number Factory** - is a lightweight microservice application based on the same framework as QotD, but its UI is minimal, and all traffic is limited to small JSON objects.

**Quote of the Day** (QotD) is an application created by the IBM Americas Center of Competency (CoC) specifically for use with AI Manager, and Log anomaly detection.  It is actively being maintained, and has been extended to show off specific Instana features as well.  While not as comprehensive as RobotShop when it comes to Instana features it is a close second.  https://gitlab.com/quote-of-the-day

**Number Factory** is a light weight microservice application, based on the same framework as QotD, but its UI is minimal, and all traffic is limited to small json objects.  

The actual functionality of these applications is not that important, other than to say they represent small Cloud Native applications with many services that communicate with each other over HTTP REST. They also provide metrics, traces, and logs for Instana to collect and monitor. The services implemented in Node.js and Java have the Instana Collector installed, enabling Instana to get tracing data used to capture the flows, identify services, service dependencies, and topology aspects.

Each of these applications has a load generator that executes the application's functionality through the main user interface of each application, thereby simulating constant user traffic to the application.

Eight separate VMs support this environment—find the distribution of the application's components illustrated below.

![app comp distribution](images/instana_pot.png)

This environment hosts two Kubernetes clusters (each with a single master and single worker node). On one cluster, the entire Robot Shop application is running (including the load generator). On the second Kubernetes cluster, some of the Quote of the Day and Number Factory components are running.

A separate VM hosts some more of the components as containers. Another VM hosts a MariaDB database and several other Node.js running as native apps on the VM (with [PM2](https://pm2.io)).  

Another VM hosts middleware components, including App Connect Enterprise (ACE) and a Message Queue. The engraving component of the Quote of the Day application puts a new message on the message queue by calling a REST API provided by ACE.

Finally, a separate VM hosts the load generators for the Quote of the Day and Number Factory applications. These load generators use a headless instance of Selenium Chrome web driver, enabling the execution of the End User Monitoring functionality of Instana.

In summary, this distribution of microservice components and IBM middleware represents, on a small scale, the architecture of real-world Cloud Native applications.


## Getting Started 

Once the TechZone environment finishes provisioning, you can access the applications in one of two ways. The simplest way is to use the bastion machine's user interface through a web browser, which does not require any additional software on your device. The other way is to use the TechZone-supplied VPN. This option requires you to install the [WireGuard](https://www.wireguard.com/) VPN client. The advantage of doing this is that your local machine's browsers (and terminal clients) will directly access the environments without leveraging a web-based user interface emulation (which can be awkward, especially when cutting and pasting snippets).

### Using the Bastion and Guacomole Interface

1. Click on the Reservation card when the Status is **Ready**.
    ![status ready](images/getting_started/1_reservation_ready.png)

2. Click on the **Bastion Remote Desktop** link.
    ![bastion link](images/getting_started/2_environment_details.png)

3. Expand the tree and select the **Remote Desktop** item.
    ![remote desktop link](images/getting_started/4_guacamole_connections.png)

4. The bastion machines desktop is running RedHat Enterprise Linux graphical user interface.
    ![rhel](images/getting_started/5_rhel_desktop.png)

5. Open the web browser by clicking the **Activities** button at the upper left corner, then click on the Firefox icon. 
    ![firefox icon](images/getting_started/6_open_firefox.png)

6. Since this is the first time activating the Firefox browser on this bastion machine, you will want to **Refresh** it.  Press the **Refresh Firefox** button.
    ![refresh firefox](images/getting_started/7_refresh_firefox_1.png)

7. Confirm the rest of the default settings.
    ![confirm reset](images/getting_started/8_refresh_firefox_2.png)

8. Finally press the **Let's go!** button to restore the tabs. 
    ![restore windows](images/getting_started/9_refresh_firefox_3.png)

9. Observe the default web page.
    ![def page](images/getting_started/10_refreshed_firefox.png)

#### Using the Clipboard

1. To use the clipboard with this UI emulation, you must use [a separate popup window](https://community.microstrategy.com/s/article/How-to-Use-Guacamole-to-Copy-and-Paste-Text-or-File-in-MicroStrategy-on-AWS?language=en_US) to paste text from your local laptop/workstation to the environments. To open this popup on MacOS, press the **Shift+Control+Option** keys simultaneously.  On a Windows, use **Ctrl+Command+Shift**.
    ![clipboard](images/getting_started/11_clipboard.png)

2. Copy the URL: `https://169.62.62.167.nip.io/#/home` with your local workstation, then paste it into the clipboard popup you just exposed.
    ![clipboard with text](images/getting_started/12_clipboard_with_data.png)

3. You can collapse the clipboard popup with the same keys you used to open it. Then place the cursor in the address bar of the web browser and use the context menu to paste the contents. 
    ![paste](images/getting_started/13_paste_into_address.png)

4. Accept the security risk warning (it is because we are using self-signed certs on Instana). Press the **Advanced** button.
    ![risk 1](images/getting_started/14_security_risk_1.png)

5. Press the **Accept the Risk and Continue** button.
    ![risk 2](images/getting_started/15_security_risk_2.png)

6. Use the clipboard popup and paste in the user and password information. Then press the **Sign In** button.  The E-mail value is 'admin@instana.local', and the  **Password:** "please refer to credentials.pdf" on the Instana server.

    ![paste pass](images/getting_started/17_paste_instana_pwd.png)

7. Save the login to make it easier in the future.
    ![save](images/getting_started/18_save_login.png)

8. At the bottom right, press the **Go to Instana!** button.
    ![log in](images/getting_started/19_go_to_instana.png)

#### Using the terminal

Some lab instructions require using a Terminal (for direct login to host machines). To open up a terminal on the bastion machine simply;

1. Press the **Activities** button, then select the Terminal tool from the toolbar.
    ![select term](images/getting_started/21_terminal_tool.png)

2. Test test the terminal with a simple Linux command like `uname -a`.
    ![uname](images/getting_started/22_terminal_test.png)

You have successfully logged into the Instana server via the bastion machine and opened a Terminal window. If you decide not to use the WireGuard VPN, skip to the Verify Applications section.

### Using the WireGuard VPN

Using the WireGuard VPN allows you to use your laptop or workstation's browser directly with the Instana server as well as the UIs of the demo apps. It also enables you to use your local Terminal to shell into the VMs, as required in some lab steps.

1. Install the WireGuard VPN client appropriate to your local operating system from: https://www.wireguard.com/install/.

2. On the reservation page of your environment, press the blue **Download Wireguard VPN config** button.  Save this file somewhere on your local workstation. 
    ![download config](images/getting_started/36_download_wireguard_config.png)

3. Run the WireGuard VPN client. Press the **Import tunnel(s) from file**.  Select the file you just downloaded.
    ![import](images/getting_started/37_import_tunnel.png)

4. You may be prompted to allow this configuration.  Press the **Allow** button.
    ![allow](images/getting_started/38_allow%20config.png)

5. Activate the VPN by pressing the **Activate** button.
    ![activate](images/getting_started/39_activate_tunnel.png)

6. The tunnel status should change to **Active**.  You can turn it off by pressing the **Deactivate** button.
    ![active](images/getting_started/40_activated_wireguard.png)

7. You can now verify that it works by opening a local web browser and navigating to one of the environment's URLs, such as the Robot Shop application: http://169.62.62.185:31965.
    ![rs local](images/getting_started/41_robotshop_local.png)

8. Verify that your local terminal application works by shelling into one of the VMs. All VMs in this environment use the user/password `cocuser/CoC#Rulz!` for access.  All of the `ssh` ports are on 2022 instead of the default value of 22 for security reasons. You can test log into one of the VMs with the command:
    ```bash
    ssh -p 2022 cocuser@169.62.62.187
    ```
    ![screen shot](images/getting_started/42_terminal_local.png)


## Start Middleware

**NOTE** The middleware services require a manual start in this environment's current version. The following instructions step you through this process.

1. Open up a terminal window.  Shell into the ACE/MQ VM with the following command.
    ```bash
    ssh -p 2022 cocuser@169.62.62.188
    ```
    Answer **yes** to the fingerprint prompt (2), and provide the password `CoC#Rulz!` (3).
    ![login](images/getting_started/23_logged_in_mqace.png)

2. Run the following command to start the services.
    ```bash
    sudo /etc/init.d/middleware.sh start
    ```
    ![strt middleware](images/getting_started/24_start_middleware.png)


## Verify Applications

Verify that all the applications are running correctly before starting any labs.

### Robot Shop

1. Open up a web browser on the URL: http://169.62.62.185:31965. Explore the functionality of the app to make sure all services are functioning. 
    ![robot shop](images/getting_started/25_robotshop.png)

### Quote of the Day 

2. Create a new tab in the browser and open up the URL: http://169.62.62.174:32000.  This is the Quote of the Day home page.  Make sure there are no errors.  Note: the specific quote will be different every day.
    ![qotd home](images/getting_started/26_qotd_home.png)

3. Verify the Random Quote function by pressing the **Random Quote** button.
    ![random](images/getting_started/27_qotd_random.png)

4. Click on the author link to navigate to the author bio page.  Verify the image is displayed with text content.  Then press the **Home** button.
    ![author](images/getting_started/28_qotd_author.png)

5. Press the **QR Code** button to display the QR code of the quote.  Then use the browser back button to get back to the home page.
    ![qr code](images/getting_started/29_qotd_qrcode.png)

6. Press the **PDF** button to display (or download depending on browser settings) the quote as a PDF.  Then use the browser back button to return to the app home page.
    ![pdf](images/getting_started/30_qotd_pdf.png)

7. Press the **Order Engraving** button.
    ![order 1](images/getting_started/31_qotd_order_1.png)

8. Press the blue **Order Engraving** button.  If the ACE and MQ services are running it should respond with a confirmation dialog.
    ![order 2](images/getting_started/32_qotd_order_2.png)

### Number Factory

9. Create a new tab in the browser and open up the URL: http://169.62.62.187:5000.  Press the blue generate buttons to generate and display of number of the given type.  If any should fail it would indicate one or more services are not working.
    ![nf](images/getting_started/33_number_factory.png)


### Anomaly Generator

10. Create a new tab in the browser and open up the URL: http://169.62.62.164:3012.  This is the home page of the Anomaly Generator.  It is used  to induce anomalous behaviour in the Quote of the Day and Number Factory applications.  
    ![anomaly home](images/getting_started/34_anomaly_generator_home.png)

11. Click on the **Services** link at the top of the page.  This page shows all the microservices that are reporting in to the anomaly generator.  Ensure that all the values for **Last Checkin** are just a few seconds old. 
    ![anom 2](images/getting_started/35_anomaly_generator_services.png)

You can now proceed to the Instana Agent Installation lab. 