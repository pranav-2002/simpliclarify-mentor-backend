export function resetPasswordTemplate(name, password) {
  return `
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:v="urn:schemas-microsoft-com:vml">

    <head>
        <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG /><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width" name="viewport" />
        <!--[if !mso]><!-->
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <!--<![endif]-->
        <title></title>
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Alegreya" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" />
        <!--<![endif]-->
        <style type="text/css">
            body {
                margin: 0;
                padding: 0;
            }

            table,
            td,
            tr {
                vertical - align: top;
                border-collapse: collapse;
            }

            * {
                line - height: inherit;
            }

            a[x-apple-data-detectors=true] {
                color: inherit !important;
                text-decoration: none !important;
            }
        </style>
        <style id="media-query" type="text/css">
            @media (max-width: 520px) {

                .block - grid,
                .col {
                    min - width: 320px !important;
                    max-width: 100% !important;
                    display: block !important;
                }

                .block-grid {
                    width: 100% !important;
                }

                .col {
                    width: 100% !important;
                }

                .col_cont {
                    margin: 0 auto;
                }

                img.fullwidth,
                img.fullwidthOnMobile {
                    max - width: 100% !important;
                }

                .no-stack .col {
                    min - width: 0 !important;
                    display: table-cell !important;
                }

                .no-stack.two-up .col {
                    width: 50% !important;
                }

                .no-stack .col.num2 {
                    width: 16.6% !important;
                }

                .no-stack .col.num3 {
                    width: 25% !important;
                }

                .no-stack .col.num4 {
                    width: 33% !important;
                }

                .no-stack .col.num5 {
                    width: 41.6% !important;
                }

                .no-stack .col.num6 {
                    width: 50% !important;
                }

                .no-stack .col.num7 {
                    width: 58.3% !important;
                }

                .no-stack .col.num8 {
                    width: 66.6% !important;
                }

                .no-stack .col.num9 {
                    width: 75% !important;
                }

                .no-stack .col.num10 {
                    width: 83.3% !important;
                }

                .video-block {
                    max - width: none !important;
                }

                .mobile_hide {
                    min - height: 0px;
                    max-height: 0px;
                    max-width: 0px;
                    display: none;
                    overflow: hidden;
                    font-size: 0px;
                }

                .desktop_hide {
                    display: block !important;
                    max-height: none !important;
                }
            }
        </style>
    </head>

    <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
        <!--[if IE]><div class="ie-browser"><![endif]-->
        <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
            style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;"
            valign="top" width="100%">
            <tbody>
                <tr style="vertical-align: top;" valign="top">
                    <td style="word-break: break-word; vertical-align: top;" valign="top">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
                        <div style="background-color:#dbedf8;">
                            <div class="block-grid"
                                style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                                <div
                                    style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#dbedf8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:5px;"><![endif]-->
                                    <div class="col num12"
                                        style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                                        <div class="col_cont" style="width:100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div
                                                style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                <!--<![endif]-->
                                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                                                <div
                                                    style="color:#393d47;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                                    <div class="txtTinyMce-wrapper"
                                                        style="font-size: 12px; line-height: 1.2; color: #393d47; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
                                                        <p
                                                            style="margin: 0; font-size: 12px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin-top: 0; margin-bottom: 0;">
                                                             </p>
                                                    </div>
                                                </div>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>
                        <div style="background-color:#dbedf8;">
                            <div class="block-grid"
                                style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
                                <div
                                    style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#dbedf8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:#ffffff;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:5px;"><![endif]-->
                                    <div class="col num12"
                                        style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                                        <div class="col_cont" style="width:100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div
                                                style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                <!--<![endif]-->
                                                <div align="center" class="img-container center fixedwidth"
                                                    style="padding-right: 0px;padding-left: 60px;">
                                                    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 60px;" align="center"><![endif]-->
                                                    <div style="font-size:1px;line-height:5px"> </div><img
                                                        align="center" alt="your-logo" border="0"
                                                        class="center fixedwidth" src="https://firebasestorage.googleapis.com/v0/b/simpliclarify-user-portal.appspot.com/o/SC-Portal%2Flogo.png?alt=media&token=3b945e02-c2ec-4580-8b74-b9766dcc1e1c"
                                                        style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 175px; display: block;"
                                                        title="your-logo" width="175" />
                                                    <div style="font-size:1px;line-height:5px"> </div>
                                                    <!--[if mso]></td></tr></table><![endif]-->
                                                </div>
                                                <div align="center" class="img-container center fixedwidth"
                                                    style="padding-right: 5px;padding-left: 5px;">
                                                    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 5px;padding-left: 5px;" align="center"><![endif]-->
                                                    <div style="font-size:1px;line-height:15px"> </div><img
                                                        align="center" alt="reset-password" border="0"
                                                        class="center fixedwidth" src="https://firebasestorage.googleapis.com/v0/b/simpliclarify-user-portal.appspot.com/o/SC-Portal%2FEmail%20Templates%2FReset%20Password%20Mentor%2Fmain-photo.png?alt=media&token=2633b9e8-496d-4fde-8313-c852488f8826"
                                                        style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 250px; display: block;"
                                                        title="reset-password" width="250" />
                                                    <div style="font-size:1px;line-height:5px"> </div>
                                                    <!--[if mso]></td></tr></table><![endif]-->
                                                </div>
                                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 25px; padding-top: 10px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
                                                <div
                                                    style="color:#21379a;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:25px;">
                                                    <div class="txtTinyMce-wrapper"
                                                        style="line-height: 1.5; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #21379a; mso-line-height-alt: 18px;">
                                                        <p
                                                            style="margin: 0; font-size: 20px; line-height: 1.5; word-break: break-word; text-align: left; mso-line-height-alt: 30px; margin-top: 0; margin-bottom: 0;">
                                                            <span style="font-size: 20px;"><strong>Reset
                                                                    Password</strong></span></p>
                                                        <p
                                                            style="margin: 0; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin-top: 0; margin-bottom: 0;">
                                                             </p>
                                                        <p
                                                            style="margin: 0; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin-top: 0; margin-bottom: 0;">
                                                            Hello ${name},</p>
                                                        <p
                                                            style="margin: 0; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin-top: 0; margin-bottom: 0;">
                                                             </p>
                                                        <p
                                                            style="margin: 0; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin-top: 0; margin-bottom: 0;">
                                                            A temporary password has been generated for your account.
                                                        </p>
                                                        <p
                                                            style="margin: 0; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin-top: 0; margin-bottom: 0;">
                                                             </p>
                                                        <p
                                                            style="margin: 0; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin-top: 0; margin-bottom: 0;">
                                                            <strong>Password: ${password}</strong></p>
                                                        <p
                                                            style="margin: 0; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin-top: 0; margin-bottom: 0;">
                                                             </p>
                                                        <p
                                                            style="margin: 0; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin-top: 0; margin-bottom: 0;">
                                                            <strong>We strongly recommend you to change your password
                                                                once logged in for security purposes. This can be done
                                                                by logging in at <a href="http://www.simpliclarify.com/"
                                                                    rel="noopener" style="color: #21379a;"
                                                                    target="_blank">www.mentor.simpliclarify.com</a></strong>
                                                        </p>
                                                    </div>
                                                </div>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                                <table border="0" cellpadding="0" cellspacing="0" class="divider"
                                                    role="presentation"
                                                    style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                    valign="top" width="100%">
                                                    <tbody>
                                                        <tr style="vertical-align: top;" valign="top">
                                                            <td class="divider_inner"
                                                                style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 60px; padding-bottom: 10px; padding-left: 60px;"
                                                                valign="top">
                                                                <table align="center" border="0" cellpadding="0"
                                                                    cellspacing="0" class="divider_content"
                                                                    role="presentation"
                                                                    style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #21379A; width: 100%;"
                                                                    valign="top" width="100%">
                                                                    <tbody>
                                                                        <tr style="vertical-align: top;" valign="top">
                                                                            <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                                                valign="top"><span></span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
                                                <div
                                                    style="color:#21379a;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                                    <div class="txtTinyMce-wrapper"
                                                        style="line-height: 1.5; font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #21379a; mso-line-height-alt: 18px;">
                                                        <p
                                                            style="margin: 0; text-align: center; line-height: 1.5; word-break: break-word; font-size: 10px; mso-line-height-alt: 15px; margin-top: 0; margin-bottom: 0;">
                                                            <span style="font-size: 10px;">If this password request was
                                                                not made by you, write to us at <a
                                                                    href="mailto:probuddy.tech@gmail.com" rel="noopener"
                                                                    style="color: #21379a;"
                                                                    target="_blank">simpliclarify.tech@gmail com</a></span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>
                        <div style="background-color:#dbedf8;">
                            <div class="block-grid"
                                style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                                <div
                                    style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#dbedf8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                                    <div class="col num12"
                                        style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                                        <div class="col_cont" style="width:100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div
                                                style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
                                                <!--<![endif]-->
                                                <div align="center" class="img-container center autowidth"
                                                    style="padding-right: 0px;padding-left: 0px;">
                                                    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]-->
                                                    <!--<img
                                                        align="center" border="0" class="center autowidth"
                                                        src="images/Btm.png"
                                                        style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 500px; display: block;"
                                                        width="500" />-->
                                                    <!--[if mso]></td></tr></table><![endif]-->
                                                </div>
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>
                        <div style="background-color:#dbedf8;">
                            <div class="block-grid"
                                style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
                                <div
                                    style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#dbedf8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                    <div class="col num12"
                                        style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                                        <div class="col_cont" style="width:100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div
                                                style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                <!--<![endif]-->
                                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
                                                <div
                                                    style="color:#21379a;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                                    <div class="txtTinyMce-wrapper"
                                                        style="font-size: 14px; line-height: 1.2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #21379a; mso-line-height-alt: 17px;">
                                                        <p
                                                            style="margin: 0; font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin-top: 0; margin-bottom: 0;">
                                                            <a href="http://www.mentor.simpliclarify.com" rel="noopener"
                                                                style="text-decoration: underline; color: #21379a;"
                                                                target="_blank">www.mentor.simpliclarify.com</a></p>
                                                    </div>
                                                </div>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                                <table cellpadding="0" cellspacing="0" class="social_icons"
                                                    role="presentation"
                                                    style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                    valign="top" width="100%">
                                                    <tbody>
                                                        <tr style="vertical-align: top;" valign="top">
                                                            <td style="word-break: break-word; vertical-align: top; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;"
                                                                valign="top">
                                                                <table align="center" cellpadding="0" cellspacing="0"
                                                                    class="social_table" role="presentation"
                                                                    style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;"
                                                                    valign="top">
                                                                    <tbody>
                                                                        <tr align="center"
                                                                            style="vertical-align: top; display: inline-block; text-align: center;"
                                                                            valign="top">
                                                                            <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 5px; padding-left: 5px;"
                                                                                valign="top"><a
                                                                                    href="https://www.instagram.com/simpliclarify/"
                                                                                    target="_blank"><img alt="Instagram"
                                                                                        height="32"
                                                                                        src="https://firebasestorage.googleapis.com/v0/b/simpliclarify-user-portal.appspot.com/o/SC-Portal%2FEmail%20Templates%2FConfirmation%20-%20Mentors%2Finstagram2x.png?alt=media&token=474e8747-0209-4546-ab8c-e0b99b9d7111"
                                                                                        style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"
                                                                                        title="Instagram"
                                                                                        width="32" /></a></td>
                                                                            <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 5px; padding-left: 5px;"
                                                                                valign="top"><a
                                                                                    href="https://www.linkedin.com/company/simpliclarify/"
                                                                                    target="_blank"><img alt="LinkedIn"
                                                                                        height="32"
                                                                                        src="https://firebasestorage.googleapis.com/v0/b/simpliclarify-user-portal.appspot.com/o/SC-Portal%2FEmail%20Templates%2FConfirmation%20-%20Mentors%2Flinkedin2x.png?alt=media&token=48e125b4-b4da-4452-90ba-07cd57d7992d"
                                                                                        style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"
                                                                                        title="LinkedIn"
                                                                                        width="32" /></a></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    </td>
                </tr>
            </tbody>
        </table>
        <!--[if (IE)]></div><![endif]-->
    </body>

    </html>`;
}
