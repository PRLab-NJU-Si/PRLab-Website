# People Data Format

## MD文件格式说明

每个成员的信息存储为单独的markdown文件，使用YAML front matter格式：

```markdown
---
name: 成员姓名
title: 职位 (Research Fellow / Ph.D. Student / Master Student / Visiting Scholar 等)
period: 时间段 (例如: 2025.08 ~ Present)
photo: 照片文件名 (存放在 assets/img/people/)
homepage: 个人主页链接 (可选)
google_scholar: Google Scholar链接 (可选)
email: 邮箱地址 (可选)
co_supervised: 联合指导信息 (可选, 例如: Co. w. Prof. XXX)
order: 排序顺序 (数字越小越靠前)
---
```

## 字段说明

- **name**: 必填，成员姓名
- **title**: 必填，职位/角色
- **period**: 必填，在实验室的时间段
- **photo**: 必填，照片文件名（如果没有照片，使用 `default-avatar.jpg`）
- **homepage**: 可选，个人主页URL
- **google_scholar**: 可选，Google Scholar主页URL
- **email**: 可选，邮箱地址
- **co_supervised**: 可选，联合指导信息
- **order**: 排序顺序（数字）

## 添加新成员

1. 在 `people/` 文件夹中创建新的 `.md` 文件
2. 按照上述格式填写信息
3. 将成员照片放入 `assets/img/people/` 文件夹
4. 刷新 `people.html` 页面即可自动显示

## 示例文件

参考 `student1.md`, `student2.md`, `student3.md` 等示例文件。
