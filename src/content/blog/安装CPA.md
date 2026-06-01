---
title: "安装 CPA"
description: "记录 CLIProxyAPI 的安装与服务启动命令"
pubDate: 2026-03-15
tags: ["代理", "CLIProxyAPI", "部署"]
category: "工具配置"
draft: false
visibility: "public"
---

curl -fsSL https://raw.githubusercontent.com/brokechubb/cliproxyapi-installer/refs/heads/master/cliproxyapi-installer | bash





3. Start the service:
   ./cli-proxy-api

4. Or run as a systemd service:
   systemctl --user enable cliproxyapi.service
   systemctl --user start cliproxyapi.service
   systemctl --user status cliproxyapi.service

5. Read the full documentation:
   https://github.com/router-for-me/CLIProxyAPI
