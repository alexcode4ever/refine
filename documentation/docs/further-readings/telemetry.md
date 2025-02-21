---
id: telemetry
title: Telemetry
sidebar_label: Telemetry
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Telemetry

## Summary

**refine** implements a **simple** and **transparent** telemetry module for collecting usage statistics defined in a **very limited scope**.

Tracking is totally **secure** and users can choose to remain **anonymous** without providing any personally identifiable information.

When setting up a new project, there is an extra, non-mandatory step where we ask for the developer’s **email address**.

Upon entry, this contact information will be collected and linked to the project. It’s used occasionally to reach out to community members, and we never share it with third parties or engage in spamming.

The telemetry system **does not use cookies**. Participation is optional and users may easily **opt-out**.

## Why do we need this?

We try to answer the question **how many users are actively using the refine framework**. This information is critical for open-source projects like refine to better understand their communities and measure their growth metrics.

## How do we collect data?

<Tabs>
    <TabItem value="refine-core" label="refine core" default>

The tracking happens when a refine application is loaded on the user's browser. On application init, a single HTTP request is sent to "https://telemetry.refine.dev". The request body is encoded with Base64 to be decoded on refine servers.

There are no consequent requests for that session, as we do NOT collect any behavioral information such as _page views_, _button clicks_, etc.

## What is collected?

The HTTP call has a JSON payload having the following application-specific attributes:

| Value         | Type        | Description                                                                                                     |
| ------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| providers     | `boolean[]` | List of providers used in the project (auth, data, router, live, notification, auditLog, i18n or accessControl) |
| version       | `string`    | Version of the refine package.                                                                                  |
| resourceCount | `number`    | Number of total resources.                                                                                      |

Additionally, the following information is extracted and collected from the HTTP header:

| Value      | Description                                           |
| ---------- | ----------------------------------------------------- |
| IP Address | IP Address of the machine the request is coming from. |
| Hostname   | Hostname of the machine the request is coming from.   |
| Browser    | Browser and browser version.                          |
| OS         | OS and OS version.                                    |

Lastly, we collect the contact information, **if provided** upon project creation.

| Value         | Description                               |
| ------------- | ----------------------------------------- |
| Email Address | Developer's Email Address. [**OPTIONAL**] |

:::note
refine.new is the cloud-based alternative to CLI for creating refine projects.
It requires users signing in with an GitHub account and a limited set of public profile information is collected for analytics purposes. The collected data can also be automatically linked to the created project.

Projects created with refine.new still can opt-out from telemetry by simply adding disableTelemetry prop to the <Refine /> component.
:::

## How to opt-out?

You can opt out of telemetry by simply adding `disableTelemetry` prop to the `<Refine />` component.

  </TabItem>

<TabItem value="refine-cli" label="refine CLI">

After running a command with the `refine` CLI, a single HTTP request is sent to "https://telemetry.refine.dev/cli".

## What is collected?

| Value            | Type                                          | Description                                                   |
| ---------------- | --------------------------------------------- | ------------------------------------------------------------- |
| nodeEnv          | `string`                                      | Specifies the environment in which an application is running. |
| nodeVersion      | `string`                                      | Installed Node.js version.                                    |
| os               | `string`                                      | Operating system name.                                        |
| osVersion        | `string`                                      | Operating system version.                                     |
| command          | `string`                                      | Running script name.                                          |
| packages         | `{ "name": "string", "version": "string" }[]` | Installed `refine` packages.                                  |
| projectFramework | `string`                                      | Installed `react` framework.                                  |

Additionally, the following information is extracted and collected from the HTTP header:

| Value      | Description                                           |
| ---------- | ----------------------------------------------------- |
| IP Address | IP Address of the machine the request is coming from. |

:::note
refine.new is the cloud-based alternative to CLI for creating refine projects.
It requires users signing in with an GitHub account and a limited set of public profile information is collected for analytics purposes. The collected data can also be automatically linked to the created project.

Projects created with refine.new still can opt-out from telemetry by simply adding disableTelemetry prop to the <Refine /> component.
:::

## How to opt-out?

You can opt out of telemetry by simply adding `REFINE_NO_TELEMETRY=true` to environment variables.

</TabItem>
</Tabs>
