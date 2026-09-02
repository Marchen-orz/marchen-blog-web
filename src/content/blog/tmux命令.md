tmux（Terminal Multiplexer）是一个终端复用工具，它允许你在单个终端窗口中创建多个虚拟终端会话，并能保持这些会话在后台运行。与直接使用终端相比，tmux 提供了更强大的会话管理功能。

**核心优势**：

- 会话持久化：即使网络断开，会话仍保留在服务器上
- 多窗口/面板管理：高效组织多个工作环境
- 会话共享：多个用户可以同时连接同一个会话

------

## 安装 tmux

在大多数 Linux 发行版中，tmux 可以通过包管理器轻松安装：

## 实例

```bash
# Ubuntu/Debian
sudo apt-get install tmux

# CentOS/RHEL
sudo yum install tmux

# macOS (使用 Homebrew)
brew install tmux
```

安装完成后，输入 `tmux` 命令即可启动一个新会话。

------

## 基本概念

### 会话（Session）

tmux 会话是一个独立的运行环境，可以包含多个窗口。即使断开连接，会话也会继续在后台运行。

### 窗口（Window）

每个会话可以包含多个窗口，类似于浏览器中的标签页。

### 面板（Pane）

每个窗口可以分割成多个面板，允许同时查看和操作多个终端。

------

## 常用命令与快捷键

tmux 的所有操作都需要先按下前缀键（默认是 `Ctrl+b`），然后输入命令键。

### 会话管理

| 命令/快捷键               | 说明                             |
| :------------------------ | :------------------------------- |
| `tmux new -s <name>`      | 创建名为 name 的新会话           |
| `Ctrl+b d`                | 分离当前会话（会话继续后台运行） |
| `tmux ls`                 | 列出所有会话                     |
| `tmux attach/a -t <name>` | 重新连接到指定会话               |
| `Ctrl+b $`                | 重命名当前会话                   |
| `Ctrl+b s`                | 切换会话                         |

### 窗口管理

| 命令/快捷键       | 说明                 |
| :---------------- | :------------------- |
| `Ctrl+b c`        | 创建新窗口           |
| `Ctrl+b &`        | 关闭当前窗口         |
| `Ctrl+b n`        | 切换到下一个窗口     |
| `Ctrl+b p`        | 切换到上一个窗口     |
| `Ctrl+b <number>` | 切换到指定编号的窗口 |
| `Ctrl+b ,`        | 重命名当前窗口       |

### 面板管理

| 命令/快捷键      | 说明                |
| :--------------- | :------------------ |
| `Ctrl+b %`       | 垂直分割当前面板    |
| `Ctrl+b "`       | 水平分割当前面板    |
| `Ctrl+b <arrow>` | 在面板间移动焦点    |
| `Ctrl+b x`       | 关闭当前面板        |
| `Ctrl+b z`       | 最大化/恢复当前面板 |
| `Ctrl+b Space`   | 切换面板布局        |

------

## 配置 tmux

tmux 的配置文件位于 `~/.tmux.conf`。以下是一些常用配置示例：

## 实例

```cmd
# 设置前缀键为 Ctrl+a（比默认的 Ctrl+b 更容易按）
unbind C-b
set -g prefix C-a
bind C-a send-prefix

# 启用鼠标支持（可以鼠标点击切换面板/窗口）
set -g mouse on

# 设置状态栏颜色
set -g status-bg black
set -g status-fg white

# 设置面板边框颜色
set -g pane-border-style fg=green
set -g pane-active-border-style fg=red

# 设置窗口从1开始编号（默认是0）
set -g base-index 1
setw -g pane-base-index 1
```

修改配置后，可以按 `Ctrl+b :` 然后输入 `source-file ~/.tmux.conf` 重新加载配置。

------

## 实用技巧

### 1. 会话恢复

即使服务器重启，也可以恢复 tmux 会话：

## 实例

*# 安装插件*
**git clone** https:**//**github.com**/**tmux-plugins**/**tmux-resurrect ~**/**clone**/**path

*# 在 .tmux.conf 中添加*
**set** -g **@**plugin 'tmux-plugins/tmux-resurrect'

### 2. 复制模式

- `Ctrl+b [` 进入复制模式
- 使用方向键移动光标
- 空格开始选择，回车复制
- `Ctrl+b ]` 粘贴

### 3. 同步输入

在多面板中同时输入相同命令：

## 实例

*# 进入同步模式*
Ctrl+b :setw synchronize-panes on

*# 关闭同步模式*
Ctrl+b :setw synchronize-panes off

### 4. 快速创建开发环境

## 实例

*# 创建一个包含3个面板的开发会话*
tmux new -s dev -d
tmux send-keys -t dev:0 "vim" C-m
tmux split-window -h -t dev:0
tmux split-window -v -t dev:0.1
tmux attach -t dev

------

## 常见问题解决

### 1. 无法使用鼠标滚动

在 `.tmux.conf` 中添加：

```cmd
set -g terminal-overrides 'xterm*:smcup@:rmcup@'
```

### 2. 颜色显示不正常

确保终端支持 256 色，添加：

```cmd
set -g default-terminal "screen-256color"
```